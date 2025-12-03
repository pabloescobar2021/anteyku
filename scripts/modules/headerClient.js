
  // async function initAdminBut() {
  //   const navButtons = document.getElementById("navButtons");
  
  //   try {
  //     const userIsAdmin = await isUserAdmin();
  
  //     if (userIsAdmin === true) {
  //       navButtons.insertAdjacentHTML(
  //         "beforeend",
  //         `
  //         <a id="adminHref" class="nav-link" href="admin/adminPage">admin</a>
  //       `
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Ошибка при проверке прав администратора:", error);
  //   }
  // }
  
  // function initScrollBar() {
  //   const searchBar = document.getElementById("searchbar");
  //   if (!searchBar) return;
  
  //   let lastScroll = 0;
  //   window.addEventListener("scroll", () => {
  //     const current = window.scrollY;
  
  //     if (current > 70) {
  //       searchBar.classList.add("fixed", "top-0", "left-0");
  //       searchBar.classList.remove("opacity-0");
  //     } else {
  //       searchBar.classList.remove("fixed", "top-0", "left-0");
  //     }
  //     lastScroll = current;
  //   });
  // }
  
  // function initBlinkButton() {
  //   const svyaz_but = document.querySelector(".svyaz_but");
  //   if (!svyaz_but) return;
  
  //   let blinkCount = 0;
  //   let blinkInterval;
  //   function startBlick() {
  //     blinkInterval = setInterval(() => {
  //       svyaz_but.classList.add("opacity-80");
  
  //       setTimeout(() => {
  //         svyaz_but.classList.remove("opacity-80");
  //         blinkCount++;
  
  //         if (blinkCount >= 3) {
  //           clearInterval(blinkInterval);
  
  //           setTimeout(() => {
  //             blinkCount = 0;
  //             startBlick();
  //           }, 3000);
  //         }
  //       }, 1000);
  //     }, 2000);
  //   }
  //   startBlick();
  // }
  
  // function initAlpineAuth() {
  //   document.addEventListener("alpine:init", () => {
  //     Alpine.data("authButton", () => ({
  //       user: null,
  //       profile: null,
  //       log_modal: false,
  
  //       async init() {
  //         const { data: { user }, } = await supabase.auth.getUser();
  //         this.user = user;
  
  //         if (user) {
  //           const { data: profile } = await supabase
  //             .from("profiles")
  //             .select("*")
  //             .eq("id", user.id)
  //             .single();
  
  //           this.profile = profile;
  //         }
  
  //         supabase.auth.onAuthStateChange((event, session) => {
  //           this.user = session?.user || null;
  //           if (this.user) {
  //             this.loadProfile();
  //           } else {
  //             this.profile = null;
  //           }
  //         });
  //       },
  
  //       async loadProfile() {
  //         const { data } = await supabase
  //           .from("profiles")
  //           .select("*")
  //           .eq("id", this.user.id)
  //           .single();
  
  //         this.profile = data;
  //       },
  
  //       openModal() {
  //         window.dispatchEvent(new CustomEvent("reglog-modal"));
  //       },
  
  //       async logout() {
  //         await supabase.auth.signOut();
  //         clearCart();
  //         window.location.reload();
  //       },
  //     }));
  //   });
  // }
  
  // function initCatalogMenu() {
  //   document.addEventListener("DOMContentLoaded", () => {
  //     const catalogButton = document.getElementById("catalogButton");
  //     const catalogMenu = document.getElementById("catalogMenu");
  
  //     if (!catalogButton || !catalogMenu) return;
  
  //     let opened = false;
  
  //     function openMenu() {
  //       opened = true;
  //       catalogMenu.classList.remove(
  //         "opacity-0",
  //         "pointer-events-none",
  //         "translate-y-2"
  //       );
  //       catalogMenu.classList.add("opacity-100", "translate-y-0");
  //     }
  //     function closeMenu() {
  //       opened = false;
  //       catalogMenu.classList.add(
  //         "opacity-0",
  //         "pointer-events-none",
  //         "translate-y-2"
  //       );
  //       catalogMenu.classList.remove("opacity-100", "translate-y-0");
  //     }
  
  //     catalogButton.addEventListener("click", (e) => {
  //       e.stopPropagation();
  //       opened ? closeMenu() : openMenu();
  //     });
  //     document.addEventListener("click", () => {
  //       if (opened) closeMenu();
  //     });
  //   });
  // }
  
  // function initHeader() {
  //   initAdminBut();
  //   initScrollBar();
  //   initBlinkButton();
  //   initAlpineAuth();
  //   initCatalogMenu();
  // }
  
  // initHeader();
    