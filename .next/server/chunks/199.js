exports.id = 199;
exports.ids = [199];
exports.modules = {

/***/ 8299:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8616))

/***/ }),

/***/ 3871:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4622))

/***/ }),

/***/ 8616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FadeInStagger: () => (/* binding */ FadeInStagger),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1498);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5796);
/* __next_internal_client_entry_do_not_use__ FadeInStagger,default auto */ 


const FadeInStaggerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
const viewport = {
    once: true,
    margin: "0px 0px -200px"
};
const FadeIn = (props)=>{
    const shouldReduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .useReducedMotion */ .J)();
    const isInStaggerGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FadeInStaggerContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
        variants: {
            hidden: {
                opacity: 0,
                y: shouldReduceMotion ? 0 : 24
            },
            visible: {
                opacity: 1,
                y: 0
            }
        },
        transition: {
            duration: 0.5
        },
        ...isInStaggerGroup ? {} : {
            initial: "hidden",
            whileInView: "visible",
            viewport
        },
        ...props
    });
};
const FadeInStagger = ({ faster = false, ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeInStaggerContext.Provider, {
        value: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: viewport,
            transition: {
                staggerChildren: faster ? 0.12 : 0.2
            },
            ...props
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FadeIn);


/***/ }),

/***/ 4622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var use_reduced_motion = __webpack_require__(1498);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
var MotionConfig = __webpack_require__(9967);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 195 modules
var motion = __webpack_require__(5796);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(566);
;// CONCATENATED MODULE: ./src/components/Container.jsx


const Container = ({ as: Component = "div", className, children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        className: (0,clsx/* default */.Z)("max-w-7xl mx-auto px-6 lg:px-8", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "max-w-2xl mx-auto lg:max-w-none",
            children: children
        })
    });
};
/* harmony default export */ const components_Container = (Container);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Logo.jsx



const Logo = ({ invert, href, className, children, ...props })=>{
    className = (0,clsx/* default */.Z)(className, "black", invert ? "text-white hover:text-blue-600" : "text-black hover:text-blue-600");
    const inner = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "relative",
        children: children
    });
    if (href) {
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            className: className,
            ...props,
            children: inner
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
        className: (0,clsx/* default */.Z)("cursor-pointer text-2xl font-semibold duration-300", className),
        ...props,
        children: inner
    });
};
/* harmony default export */ const components_Logo = (Logo);

// EXTERNAL MODULE: ./node_modules/react-icons/hi/index.esm.js
var index_esm = __webpack_require__(2717);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(2772);
;// CONCATENATED MODULE: ./src/components/Button.jsx



const Button = ({ invert, href, className, children, ...props })=>{
    className = (0,clsx/* default */.Z)(className, "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition", invert ? "bg-white text-neutral-950 hover:bg-neutral-200" : "bg-neutral-950 text-white hover:bg-neutral-800");
    let inner = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        children: children
    });
    if (href) {
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            className: className,
            ...props,
            children: inner
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: className,
        ...props,
        children: inner
    });
};
/* harmony default export */ const components_Button = (Button);

;// CONCATENATED MODULE: ./src/components/Offices.jsx


function Office({ name, children, invert = false }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("address", {
        className: (0,clsx/* default */.Z)("text-sm not-italic", invert ? "text-neutral-300" : "text-neutral-600"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                className: invert ? "text-white" : "text-neutral-950",
                children: name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            children
        ]
    });
}
const Offices = ({ invert = false, ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        role: "list",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Office, {
                    name: "Canada",
                    invert: invert,
                    children: "+1 647 646 4 ***"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Office, {
                    name: "Sri Lanka",
                    invert: invert,
                    children: "+94 776 213 ***"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Offices = (Offices);

// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(930);
;// CONCATENATED MODULE: ./src/components/SocialMedia.jsx




const SocialMediaProfiles = [
    {
        title: "Instagram",
        href: "https://www.instagram.com/thesenisha",
        icon: bs_index_esm/* BsInstagram */.Vs6
    },
    {
        title: "GitHub",
        href: "https://github.com/k-avin",
        icon: bs_index_esm/* BsGithub */.rFR
    },
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/company/infocliq/",
        icon: bs_index_esm/* BsLinkedin */.NQh
    },
    {
        title: "Facebook",
        href: "",
        icon: bs_index_esm/* BsFacebook */.k1O
    }
];
const SocialMedia = ({ className, invert = false })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        role: "list",
        className: (0,clsx/* default */.Z)("flex gap-x-10", invert ? "text-white" : "text-neutral-950", className),
        children: SocialMediaProfiles.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: item.href,
                    "aria-label": item.title,
                    className: (0,clsx/* default */.Z)("transition", invert ? "hover:text-neutral-200" : "hover:text-neutral-700"),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                        className: "h-6 w-6 fill-current"
                    })
                })
            }, item.title))
    });
};
/* harmony default export */ const components_SocialMedia = (SocialMedia);

// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var FadeIn = __webpack_require__(8616);
;// CONCATENATED MODULE: ./src/constants/index.jsx


const constants_navigation = [
    {
        title: "Work",
        links: [
            {
                title: "AH MANA3RAF",
                href: "/work/amazonclone"
            },
            {
                title: "AH MANA3RAF",
                href: "/work/bazar"
            },
            {
                title: "AH MANA3RAF",
                href: "/work/blog101"
            },
            {
                title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "See all ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            "aria-hidden": "true",
                            children: "→"
                        })
                    ]
                }),
                href: "/work"
            }
        ]
    },
    {
        title: "Company",
        links: [
            {
                title: "About",
                href: "/about"
            },
            {
                title: "Cards",
                href: "/process"
            },
            {
                title: "Blog",
                href: "/blog"
            },
            {
                title: "Contact us",
                href: "/contact"
            }
        ]
    },
    {
        title: "Connect",
        links: SocialMediaProfiles
    }
];

;// CONCATENATED MODULE: ./src/components/FooterNavigation.jsx



const FooterNavigation = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            role: "list",
            className: "grid grid-cols-2 gap-8 sm:grid-cols-3",
            children: constants_navigation.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "font-display text-sm font-semibold tracking-wider text-neutral-950",
                            children: item.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            role: "list",
                            className: "mt-4 text-sm text-neutral-700",
                            children: item.links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: link.href,
                                        className: "transition hover:text-neutral-950",
                                        children: link.title
                                    })
                                }, link.title))
                        })
                    ]
                }, item.title))
        })
    });
};
/* harmony default export */ const components_FooterNavigation = (FooterNavigation);

;// CONCATENATED MODULE: ./src/components/Footer.jsx







const ArrowIcon = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 6",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 3 10 .5v2H0v1h10v2L16 3Z"
        })
    });
};
const NewsletterForm = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: "max-w-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "font-display text-sm font-semibold tracking-wider text-neutral-950",
                children: "Sign up for our newsletter"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-4 text-sm text-neutral-700",
                children: "Subscribe to get the latest design news, articles, resources and inspiration."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative mt-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "email",
                        placeholder: "Email address",
                        autoComplete: "email",
                        "aria-label": "Email address",
                        className: "block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute inset-y-1 right-1 flex justify-end",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            "aria-label": "Submit",
                            className: "flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                className: "w-4"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Container, {
        as: "footer",
        className: "mt-24 w-full sm:mt-32 lg:mt-40",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FadeIn["default"], {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_FooterNavigation, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex lg:justify-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NewsletterForm, {})
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            "aria-label": "Home",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {
                                className: "h-8",
                                fillOnHover: true,
                                children: "Senisha"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-sm text-neutral-700",
                            children: [
                                "\xa9 Powerd by infocliq. ",
                                new Date().getFullYear()
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/images/logo/logo-solid-dark.svg
/* harmony default export */ const logo_solid_dark = ({"src":"/_next/static/media/logo-solid-dark.68a493b5.svg","height":95,"width":442,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/logo/logo-solid-light.svg
/* harmony default export */ const logo_solid_light = ({"src":"/_next/static/media/logo-solid-light.681e1059.svg","height":98,"width":454,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/components/RootLayout.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
















const Header = ({ panelId, invert = false, icon: Icon, expanded, onToggle, toggleRef })=>{
    // Container
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    "aria-label": "Home",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {
                        invert: invert,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: expanded ? logo_solid_light : logo_solid_dark,
                            alt: "Senisha Logo",
                            width: 150,
                            height: 50
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center gap-x-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Button, {
                            href: "/contact",
                            invert: invert,
                            children: "Contact us"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            ref: toggleRef,
                            type: "button",
                            onClick: onToggle,
                            "aria-expanded": expanded.toString(),
                            "aria-controls": panelId,
                            className: (0,clsx/* default */.Z)("group -m-2.5 rounded-full p-2.5 transition", invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"),
                            "aria-label": "Toggle navigation",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                className: (0,clsx/* default */.Z)("h-6 w-6", invert ? "fill-white group-hover:fill-neutral-200" : "fill-neutral-950 group-hover:fill-neutral-700")
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const NavigationRow = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "even:mt-px sm:bg-neutral-950",
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2",
                children: children
            })
        })
    });
};
const NavigationItem = ({ href, children })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: href,
        className: "group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16",
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"
            })
        ]
    });
};
const Navigation = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "mt-px font-display text-5xl font-medium tracking-tight text-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavigationRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/about",
                        children: "About Us"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/contact",
                        children: "Contact Us"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavigationRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/"
                    })
                ]
            })
        ]
    });
};
const RootLayoutInner = ({ children })=>{
    const panelId = (0,react_.useId)();
    const [expanded, setExpanded] = (0,react_.useState)(false);
    const openRef = (0,react_.useRef)();
    const closeRef = (0,react_.useRef)();
    const navRef = (0,react_.useRef)();
    const shouldReduceMotion = (0,use_reduced_motion/* useReducedMotion */.J)();
    (0,react_.useEffect)(()=>{
        function onClick(event) {
            if (event.target.closest("a")?.href === window.location.href) {
                setExpanded(false);
            }
        }
        window.addEventListener("click", onClick);
        return ()=>{
            window.removeEventListener("click", onClick);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MotionConfig/* MotionConfig */.A, {
        transition: shouldReduceMotion ? {
            duration: 0
        } : undefined,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute left-0 right-0 top-2 z-40 pt-14",
                        "aria-hidden": expanded ? "true" : undefined,
                        inert: expanded ? "" : undefined,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                            panelId: panelId,
                            icon: index_esm/* HiMenuAlt4 */.iwI,
                            toggleRef: openRef,
                            expanded: expanded,
                            onToggle: ()=>{
                                setExpanded((expanded)=>!expanded);
                                window.setTimeout(()=>closeRef.current?.focus({
                                        preventScroll: true
                                    }));
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                        layout: true,
                        id: panelId,
                        style: {
                            height: expanded ? "auto" : "0.5rem"
                        },
                        className: "relative z-50 overflow-hidden bg-neutral-950 pt-2",
                        "aria-hidden": expanded ? undefined : "true",
                        inert: expanded ? undefined : "",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                            layout: true,
                            className: "bg-neutral-800",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    ref: navRef,
                                    className: "bg-neutral-950 pb-16 pt-14",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                                        invert: true,
                                        panelId: panelId,
                                        icon: io_index_esm/* IoMdClose */.QAE,
                                        toggleRef: closeRef,
                                        expanded: expanded,
                                        onToggle: ()=>{
                                            setExpanded((expanded)=>!expanded);
                                            window.setTimeout(()=>openRef.current?.focus({
                                                    preventScroll: true
                                                }));
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Container, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "font-display text-base font-semibold text-white",
                                                            children: "Our offices"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(components_Offices, {
                                                            invert: true,
                                                            className: "mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "sm:border-l sm:border-transparent sm:pl-16",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "font-display text-base font-semibold text-white",
                                                            children: "Follow us"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(components_SocialMedia, {
                                                            className: "mt-6",
                                                            invert: true
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                layout: true,
                style: {
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                },
                className: "relative flex flex-auto overflow-hidden bg-white pt-14",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                    layout: true,
                    className: "relative isolate flex w-full flex-col pt-9",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            className: "w-full flex-auto",
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                    ]
                })
            })
        ]
    });
};
const RootLayout = ({ children })=>{
    const pathName = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx(RootLayoutInner, {
        children: children
    }, pathName);
};
/* harmony default export */ const components_RootLayout = (RootLayout);


/***/ }),

/***/ 3530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/RootLayout.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/kabilrajselvanantham/Documents/infocliq/projects/senisha/senisha-promotion/src/components/RootLayout.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const RootLayout = (__default__);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
;// CONCATENATED MODULE: ./src/app/layout.jsx



const metadata = {
    title: {
        template: "Senisha",
        default: "Senisha"
    }
};
function Layout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: "h-full bg-neutral-950 text-base antialiased text-neutral-100",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "flex min-h-full flex-col",
            children: /*#__PURE__*/ jsx_runtime_.jsx(RootLayout, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 9653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1392);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5635);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2947);





const NotFound = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: "flex h-full items-center pt-20 sm:pt-24 lg:pt-32",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_FadeIn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
            className: "flex flex-col items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "font-display text-4xl font-semibold text-neutral-950 sm:text-5xl",
                    children: "404"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mt-4 font-display text-2xl font-semibold text-neutral-950",
                    children: "Page not found"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-2 text-sm text-neutral-600",
                    children: "Sorry, we could ont find the page you are looking for."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/",
                    className: "mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700",
                    children: "Go to the home page"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);


/***/ }),

/***/ 1392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5182);


const Container = ({ as: Component = "div", className, children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("max-w-7xl mx-auto px-6 lg:px-8", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-2xl mx-auto lg:max-w-none",
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 5635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   o$: () => (/* binding */ e0)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kabilrajselvanantham/Documents/infocliq/projects/senisha/senisha-promotion/src/components/FadeIn.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["FadeInStagger"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;