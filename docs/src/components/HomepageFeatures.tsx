/* eslint-disable import/no-unresolved */
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CodeBlock from '@theme/CodeBlock';

import clsx from 'clsx';
import type { ReactNode } from 'react';
import HomepageCarousel from './HomepageCarousel';
import styles from './HomepageFeatures.module.css';
import Sliders from './LanguageSliders';
import LiveCodes from './LiveCodes';

interface FeatureItem {
  title: string;
  image?: string;
  description: ReactNode;
}

const FeatureList1: FeatureItem[] = [
  {
    title: 'دارای امکانات فراوان',
    image: './img/light-bulb.svg',
    description: (
      <>
        پشتیبانی از بیش از 90 زبان و فریم‌ورک. شامل پشتیبانی از TypeScript، استفاده از بسته‌های npm، کنسول،
        نمایش کد کامپایل‌شده، قالب‌های آماده، ذخیره و بازیابی، صادرات و واردات، اشتراک‌گذاری و امکانات
        متنوع دیگر. ماژول‌ها و افزونه‌ها تنها در زمان نیاز بارگیری می‌شوند.
      </>
    ),
  },
  {
    title: 'کلاینت-ساید!',
    image: './img/clients.svg',
    description: (
      <>
        Nitro Code Editor مستقیماً در مرورگر اجرا می‌شود و تمام پردازش‌ها در سمت کاربر انجام می‌شوند. نیازی به سرور
        دائم نیست؛ بنابراین پس از بارگذاری اولیه بسیار سریع است و می‌توان آن را روی هر سرویس استاتیک یا CDN
        میزبانی کرد. نیازی به نصب محلی یا npm install نیست — فقط مرورگر کافی است.
      </>
    ),
  },
  {
    title: 'ادغام‌ها',
    image: './img/integrations.svg',
    description: (
      <>
        امکانات متنوع برای وارد کردن، صادر کردن و همگام‌سازی کد با سرویس‌ها و مخازن مختلف. گزینه‌های
        یکپارچه‌سازی زیادی وجود دارد تا بتوانید جریان کاری خود را ساده کنید.
      </>
    ),
  },
];

const FeatureList2: FeatureItem[] = [
  {
    title: 'ویرایشگر قدرتمند',
    image: './img/feather.svg',
    description: (
      <>
        ویرایشگر شامل تکمیل خودکار، Intellisense، قالب‌بندی کد، ویرایش چند-کرسر، پشتیبانی از Emmet،
        حالت‌های Vim و Emacs، تم‌های مختلف و تنظیمات قابل‌سفارشی‌سازی است. روی دسکتاپ از ویرایشگر قدرتمند
        استفاده می‌شود و روی موبایل از ویرایشگری مناسب لمس بهره می‌برد.
      </>
    ),
  },

  {
    title: 'دستیار کدنویسی با هوش مصنوعی',
    image: './img/magic-wand.svg',
    description: (
      <>
        دستیار هوش مصنوعی به شما کمک می‌کند سریع‌تر کدنویسی کنید و مفاهیم را یاد بگیرید. این دستیار
        پیشنهادهای هوشمند براساس کد و توضیحات شما ارائه می‌دهد و در نسخه‌های مختلف برنامه قابل استفاده است.
      </>
    ),
  },
  {
    title: 'مناسب برای موبایل',
    image: './img/responsive.svg',
    description: (
      <>
        رابط کاربری واکنش‌گرا و مناسب موبایل امکان کار روی دستگاه‌های مختلف را فراهم می‌کند. ویرایشگر مناسب
        لمس در موبایل تجربه‌ای روان ارائه می‌دهد و می‌توانید پروژه‌ها را بین دستگاه‌ها همگام‌سازی یا با
        استفاده از کد QR به‌راحتی به‌اشتراک بگذارید.
      </>
    ),
  },
];

const FeatureList3: FeatureItem[] = [
  {
    title: 'اپ مستقل',
    image: './img/star.svg',
    description: (
      <>
        اپلیکیشن مستقل برای نمونه‌سازی سریع، آزمایش ایده‌ها و یادگیری. اپ تنظیمات و پروژه‌های شما را ذخیره
        می‌کند، امکان سازماندهی پروژه‌ها و مدیریت دارایی‌ها را می‌دهد و می‌توانید پروژه‌ها را با دیگران
        به‌اشتراک بگذارید یا مستقر کنید.
      </>
    ),
  },
  {
    title: 'پلی‌گراندهای جاسازی‌شده',
    image: './img/add-frame.svg',
    description: (
      <>
        امکان جاسازی پلی‌گراند در صفحات وب و پیش‌پُر کردن کد به‌صورت خودکار. این ویژگی برای سایت‌های آموزشی
        و مستندسازی کتابخانه‌ها بسیار مفید است. محیط‌های جاسازی‌شده امن و قابل‌پیکربندی هستند.
      </>
    ),
  },
  {
    title: 'دوستدار توسعه‌دهنده',
    image: './img/code.svg',
    description: (
      <>
        شروع سریع و ساده، پیکربندی از طریق URL و ابزارهای توسعه‌دهنده برای جاسازی و کنترل پلی‌گراندها.
        پشتیبانی از JavaScript/TypeScript و فریم‌ورک‌های رایج و همچنین حالت headless برای کنترل کامل رابط.
      </>
    ),
  },
];

const FeatureList4: FeatureItem[] = [
  {
    title: 'تمرکز بر حریم خصوصی',
    image: './img/data-privacy.svg',
    description: (
      <>
        پروژه‌ها به‌صورت پیش‌فرض خصوصی هستند. کد تا زمانی که خودتان نخواهید از دستگاه خارج نمی‌شود و
        داده‌ها در مرورگر ذخیره می‌شوند. امنیت و حفظ حریم خصوصی جدی گرفته شده است.
      </>
    ),
  },
  {
    title: 'رایگان و متن‌باز',
    image: './img/oss.svg',
    description: (
      <>
        این پروژه رایگان و متن‌باز است و برای استفاده محدودیتی ندارد
      </>
    ),
  },
];


function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {image && (
        <div className="text--center">
          <img className={styles.featureSvg} alt={title} src={image} />
        </div>
      )}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

const codeSample = `
import { createPlayground } from "livecodes";

createPlayground("#container", { template: "react" });
`.trimStart();

const ESMCode = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <CodeBlock language="html" showLineNumbers={true}>
      {`
<div id="container"></div>\n<script type="module">
import { createPlayground } from 'https://cdn.jsdelivr.net/npm/livecodes@${siteConfig.customFields.sdkVersion}';

createPlayground('#container', {
  params: {
    markdown: '# سلام LiveCodes!',
    css: 'h1 {color: dodgerblue;}',
    js: 'console.log("سلام، از JS!");',
    console: 'open',
  },
});
</script>`.trimStart()}
    </CodeBlock>
  );
};

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <Sliders></Sliders>
          </div>
          <div className={'row ' + styles.center}>
            <LiveCodes
              template="react"
              style={{
                height: '70vh',
                width: '95%',
                boxShadow: '0 0 20px var(--ifm-color-secondary-darkest)',
              }}
              showCode={false}
              loading="eager"
            ></LiveCodes>
            <div className="margin-vert--md">
              <p>
                این یک محیط امن برای تست کد
                (زمین بازی)
                است
                <img
                  src="./img/arrow.svg"
                  alt="arrow-up"
                  style={{
                    height: '2em',
                    verticalAlign: 'middle',
                    marginLeft: '0.5em',
                    marginBottom: '0.7em',
                  }}
                ></img>
                <br></br>
                با انجام تغییر در کد بالا نتیجهٔ اجرای کد را مشاهده خواهید کرد
              </p>
            </div>
          </div>
          <div style={{'textAlign':'center'}}>
            <p>می‌خواهی از ویرایشگر تحت وب در سایت خود استفاده کنی؟  <br /></p>
          
            <p>با ایمیل ما در ارتباط باشید : <a href="mailto:info@nitrocode.ir">info@nitrocode.ir</a></p>
          </div>

          <div className={`row ${styles.center} ${styles.buttons}`}>
            <a
              className=" button button--info button--outline button--lg"
              href="/"
            >
              شروع کنید ✈️
            </a>
          </div>
        </div>
      </section>
      <section dir='rtl' style={{textAlign:'right'}} className={clsx(styles.features, styles.rowDark)}>
        <div className="container padding-vert--lg">
          <div className="text--center padding-horiz--md">
            <h2 className={styles.padding}>محیط کدنویسی که به‌راحتی کار می‌کند!</h2>
            <div className={'row ' + styles.center}>
              <div className={clsx('col col--6', styles.left)}>
                <ul style={{textAlign:'right'}}>
                  <li>بدون سرور برای پیکربندی </li>
                  <li>بدون دیتابیس برای نگهداری </li>
                  <li>بدون نیاز به نصب</li>
                  <li>بدون فایل‌های پیکربندی</li>
                  <li>بدون مراحل ساخت</li>
                  <li>
                    بدون هزینهٔ اشتراک (رایگان )
                  </li>
                  <li>نیاز به حساب کاربری نیست *</li>
                  <li>بدون محدودیت در استفاده (پروژه‌های خصوصی نامحدود)</li>
                  <li>
                    بیش از 90 زبان/فریم‌ورک/پردازشگر
                  </li>

                  <li>این ویرایشگر کد تنها در مرورگر شما اجرا می‌شود (کلاینت-ساید)</li>
                </ul>
              </div>
              <div style={{textAlign:"right"}} className={clsx('col col--6', styles.left)}>
                <div>
                  <p>
                    <strong>مراحل: کافیست وارد آدرس زیر شوید</strong>
                  </p>
                  <ol className={styles.steps}>
                    <li style={{textAlign:'left'}}>
                      <a href="https://play.nitrocode.ir/" target="_blank">
                        play.nitrocode.ir
                      </a>
                    </li>
                  </ol>
                   و از تمام ویژگی‌ها لذت ببرید!
                </div>
                <hr />
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section dir='rtl' className={clsx(styles.features, styles.rowLight)}>
        <div className="container padding-vert--lg">
          <div className={'row ' + styles.center}>
            {FeatureList1.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section dir='rtl' className={clsx(styles.features, styles.rowDark)}>
        <div className="container padding-vert--lg">
          <div className={'row ' + styles.center}>
            {FeatureList2.map((props, idx) => (
              <Feature key={idx} {...{ ...props, idx }} />
            ))}
          </div>
        </div>
      </section>
      <section dir='rtl' className={clsx(styles.features, styles.rowLight)}>
        <div className="container padding-vert--lg">
          <div className={'row ' + styles.center}>
            {FeatureList3.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section dir='rtl' className={clsx(styles.features, styles.rowDark)}>
        <div className="container padding-vert--lg">
          <div className={'row ' + styles.center}>
            {FeatureList4.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className={'container padding-vert--lg ' + styles.center}>
          <div className={['row', styles.carousel, styles.center].join(' ')}>
            <h3>اسکرین‌شات‌ها</h3>
            <HomepageCarousel></HomepageCarousel>
          </div>
        </div>
      </section>
      <section>
        <div className={'container padding-vert--lg ' + styles.center}>
          <div className={['row', styles.carousel, styles.center].join(' ')}>
            <div className={styles.buttons}>
              <Link
                className=" button button--info button--outline button--lg"
                href="pathname:///../?new"
                target="_blank"
              >
                پروژهٔ جدید ✨
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
