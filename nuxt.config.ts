// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Luis Vaz",
      meta: [
        {
          name: "description",
          content: `Isso mesmo, você terá a oportunidade de
          pegar minhas dicas e GANHAR DINHEIRO
          em tempo real!`,
        },
      ],
      script: [
        {
          hid: "tag-manager",
          innerHTML: /* javascript */ `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K3S3DGNM');
        `,
        },
        {
          hid: "facebook-pixel",
          innerHTML: /* javascript */ `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '3268302350080742');
          fbq('track', 'PageView');
        `,
        },
      ],
    },
  },
  srcDir: "src/",
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icon"],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    format: ["webp"],
    densities: [1, 2, 3],
  },
  build: {
    templates: [
      {
        src: "src/templates/app.html",
      },
    ],
    transpile: ["vue-toastification"],
  },
  css: ["@/assets/styles.scss"],
  routeRules: {
    "/": { static: true },
    "/curso": { static: true },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/mixins.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      compra: "https://pay.herospark.com/-183475",
      whatsapp: "https://wa.me/message/RUNWV6QFALJAG1",
      youtube: "https://www.youtube.com/LuisVazTrader",
      instagram: "https://instagram.com/luisvazoficial",
      facebook:
        "https://www.facebook.com/profile.php?id=100093435019657&mibextid=LQQJ4d",
    },
  },
  devtools: { enabled: true },
});
