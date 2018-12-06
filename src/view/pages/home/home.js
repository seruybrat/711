(() => {

  window.addEventListener(
    "load",

    () => {

      // media query event handler
      if (matchMedia) {
        const mq = window.matchMedia("(min-width: 780px)");
        mq.addListener(widthChange);
        widthChange(mq);
      }

      // media query change
      function widthChange(mq) {
        if (mq.matches) {
          const BUTTONS = document.querySelectorAll(".btn");
          const WRAPPER = document.querySelector(".wrapper");

          for (let i = 0; i < BUTTONS.length; i++) {
            BUTTONS[i].addEventListener("mouseenter", e => {
              WRAPPER.classList.add(`${e.target.id}`)
            });
            BUTTONS[i].addEventListener("mouseleave", e => {
              WRAPPER.classList.remove(`${e.target.id}`)
            });
          }

        }
      }
    },

    false
  );

})();
