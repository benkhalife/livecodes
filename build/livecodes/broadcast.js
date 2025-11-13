// src/livecodes/utils/utils.ts
var predefinedValues = {
  APP_VERSION: "47",
  SDK_VERSION: "0.12.0",
  COMMIT_SHA: "059b1cb",
  REPO_URL: "https://github.com/live-codes/livecodes",
  DOCS_BASE_URL: "http://localhost:3000/docs/"
};

// src/livecodes/html/broadcast.html?raw
var broadcast_default = '<div id="broadcast-container" class="modal-container">\n  <div class="modal-title" data-i18n="broadcast.heading">Broadcast</div>\n  <div id="broadcast-screen-container" class="modal-screen-container">\n    <div id="broadcast-status" class="modal-status"></div>\n\n    <div class="modal-screen">\n      <div class="description help" data-i18n="broadcast.desc" data-i18n-prop="innerHTML">\n        Broadcast the result page to other browsers/devices in real time. Please visit the\n        <a href="{{DOCS_BASE_URL}}features/broadcast" target="_blank" rel="noopener"\n          >documentations</a\n        >\n        for details.\n      </div>\n      <form id="broadcast-form">\n        <div>\n          <label for="broadcast-server-url" data-i18n="broadcast.serverURL.heading"\n            >Server URL</label\n          >\n          <br />\n          <input\n            type="text"\n            dir="ltr"\n            id="broadcast-server-url"\n            placeholder="Required"\n            data-i18n="generic.required"\n            data-i18n-prop="placeholder"\n          />\n        </div>\n        <div class="padded">\n          <input type="checkbox" id="broadcast-source" />\n          <label for="broadcast-source" data-i18n="broadcast.includeSourceCode"\n            >Include source code</label\n          >\n        </div>\n        <button\n          id="broadcast-btn"\n          class="wide-button"\n          type="submit"\n          data-i18n="broadcast.broadcastBtn.start"\n        >\n          Broadcast\n        </button>\n        <div id="broadcast-channel-url-section">\n          <label for="broadcast-channel-url" data-i18n="broadcast.channelURL">Channel URL</label>\n          <a id="broadcast-channel-url" href="#" target="_blank"></a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n';

// src/livecodes/html/index.ts
var replaceValues = (str) => Object.entries(predefinedValues).reduce(
  (str2, [key, value]) => str2.replace(new RegExp(`{{${key}}}`, "g"), value),
  str
);
var broadcastScreen = /* @__PURE__ */ replaceValues(broadcast_default);

// src/livecodes/services/broadcast.ts
var broadcastService = {
  getUrl: () => false ? `https://${location.hostname}:${"3030"}` : "https://vps.livecodes.io:3030/"
};

// src/livecodes/UI/selectors.ts
var getBroadcastStatusLabel = (broadcastContainer) => broadcastContainer.querySelector("#broadcast-status");
var getBroadcastForm = (broadcastContainer) => broadcastContainer.querySelector("#broadcast-form");
var getBroadcastServerUrlInput = (broadcastContainer) => broadcastContainer.querySelector("#broadcast-server-url");
var getBroadcastSourceCheckbox = (broadcastContainer) => broadcastContainer.querySelector("#broadcast-source");
var getBroadcastBtn = (broadcastContainer) => broadcastContainer.querySelector("#broadcast-btn");
var getBroadcastChannelUrlSection = (broadcastContainer) => broadcastContainer.querySelector("#broadcast-channel-url-section");
var getBroadcastChannelUrl = (broadcastContainer) => broadcastContainer.querySelector("#broadcast-channel-url");

// src/livecodes/UI/broadcast.ts
var createBroadcastUI = async ({
  modal,
  notifications,
  eventsManager,
  deps
}) => {
  const div = document.createElement("div");
  div.innerHTML = broadcastScreen;
  const broadcastContainer = div.firstChild;
  modal.show(broadcastContainer);
  const broadcastStatusLabel = getBroadcastStatusLabel(broadcastContainer);
  const broadcastForm = getBroadcastForm(broadcastContainer);
  const broadcastServerUrlInput = getBroadcastServerUrlInput(broadcastContainer);
  const broadcastSourceCheckbox = getBroadcastSourceCheckbox(broadcastContainer);
  const broadcastBtn = getBroadcastBtn(broadcastContainer);
  const broadcastChannelUrlSection = getBroadcastChannelUrlSection(broadcastContainer);
  const broadcastChannelUrl = getBroadcastChannelUrl(broadcastContainer);
  let broadcastData = deps.getBroadcastData();
  const updateBroadcastUI = () => {
    broadcastBtn.disabled = false;
    broadcastData = deps.getBroadcastData();
    if (broadcastData?.isBroadcasting) {
      broadcastStatusLabel.innerText = window.deps.translateString(
        "broadcast.broadcasting",
        "Broadcasting..."
      );
      broadcastServerUrlInput.disabled = true;
      broadcastSourceCheckbox.disabled = true;
      broadcastBtn.innerText = window.deps.translateString(
        "broadcast.broadcastBtn.stop",
        "Stop broadcast"
      );
      broadcastSourceCheckbox.checked = broadcastData?.broadcastSource === true;
      if (broadcastData?.channelUrl) {
        broadcastChannelUrlSection.style.display = "unset";
        broadcastChannelUrl.innerText = broadcastData.channelUrl;
        broadcastChannelUrl.href = broadcastData.channelUrl;
      }
    } else {
      broadcastStatusLabel.innerText = "";
      broadcastServerUrlInput.disabled = false;
      broadcastSourceCheckbox.disabled = false;
      broadcastBtn.innerText = window.deps.translateString(
        "broadcast.broadcastBtn.start",
        "Broadcast"
      );
      broadcastChannelUrlSection.style.display = "none";
    }
    broadcastServerUrlInput.value = broadcastServerUrlInput.value.trim() || broadcastData?.serverUrl || broadcastService.getUrl();
  };
  updateBroadcastUI();
  eventsManager.addEventListener(broadcastForm, "submit", async (ev) => {
    ev.preventDefault();
    broadcastData = deps.getBroadcastData();
    if (broadcastData?.isBroadcasting) {
      const url = broadcastData.serverUrl;
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          channel: broadcastData.channel,
          channelToken: broadcastData.channelToken,
          stop: true
        })
      }).catch(() => void 0);
      deps.setBroadcastData({
        isBroadcasting: false,
        channel: "",
        channelUrl: "",
        channelToken: "",
        broadcastSource: false,
        serverUrl: url
      });
      updateBroadcastUI();
      return;
    }
    const serverUrl = broadcastServerUrlInput.value.trim();
    if (!serverUrl) {
      notifications.error(
        window.deps.translateString("broadcast.error.serverURLRequired", "Server URL is required!")
      );
      return;
    }
    broadcastBtn.disabled = true;
    broadcastBtn.innerText = window.deps.translateString("broadcast.connecting", "Connecting...");
    const result = await deps.broadcast({
      serverUrl,
      channel: "",
      // do not use saved
      channelToken: "",
      // do not use saved
      broadcastSource: broadcastSourceCheckbox.checked
    });
    if (!result || "error" in result) {
      notifications.error(
        window.deps.translateString("broadcast.error.generic", "Broadcast failed!")
      );
      updateBroadcastUI();
      return;
    }
    deps.setBroadcastData({
      isBroadcasting: true,
      serverUrl,
      channel: result.channel,
      channelUrl: result.channelUrl,
      channelToken: result.channelToken || "",
      broadcastSource: broadcastSourceCheckbox.checked
    });
    updateBroadcastUI();
    notifications.success(window.deps.translateString("broadcast.broadcasting", "Broadcasting..."));
  });
};
export {
  createBroadcastUI
};
