import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(() => {
  AOS.init({
    disable: "phone",
    once: true,
    offset: 10,
  });
});
