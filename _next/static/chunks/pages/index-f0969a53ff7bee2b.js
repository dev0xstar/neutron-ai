(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    48312: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(11094);
        },
      ]);
    },
    11094: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return eu;
          },
        });
      var l = a(85893),
        r = a(67294),
        o = a(21367),
        n = a.n(o);
      function s(e) {
        let {
          label: t,
          onClick: a,
          disabled: r,
          block: o = !1,
          className: s,
          ...i
        } = e;
        return (0, l.jsx)(n(), {
          className: "!bg-transparent !border-0 p-0 flex flex-col gap-[4px] "
            .concat(o ? "w-[100%]" : "w-[240px]", " h-[66px] ")
            .concat(s || ""),
          style: {
            opacity: r ? 0.6 : void 0,
            pointerEvents: r ? "none" : void 0,
          },
          onClick: r ? void 0 : a,
          ...i,
          children: (0, l.jsx)("span", {
            className:
              "w-[100%] h-[100%] block relative rounded-[12px] border-[2px] border-secondary",
            children: (0, l.jsx)("span", {
              className:
                "block absolute top-[4px] left-[4px] right-[4px] bottom-[4px] overflow-clip rounded-[8px] border-[1px] border-secondary bg-gradient-to-t from-button-type-2-bg-top to-button-type-2-bg-bottom",
              children: (0, l.jsx)("span", {
                className:
                  "block absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] overflow-clip rounded-[8px] border-[12px]",
                style: {
                  borderImageRepeat: "repeat",
                  borderImageSlice: "12 12 12 12",
                  borderImageWidth: "12px",
                  borderImageSource: "url('".concat(
                    "/_next/static/media/pattern.de2b94c9.svg",
                    "')"
                  ),
                },
                children: (0, l.jsx)("span", {
                  className:
                    "typo-mech-3 text-center text-primary absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] uppercase  max-w-full overflow-hidden text-ellipsis whitespace-nowrap",
                  children: t,
                }),
              }),
            }),
          }),
        });
      }
      var i = a(68346),
        c = a(41686);
      let d = (0, c.ZP)(i.Z).withConfig({ componentId: "sc-a0f8dda5-0" })([
        ".ant-modal-content{padding:0;border:none;border-radius:0;background-color:transparent;}",
      ]);
      function p(e) {
        let [t, a] = (0, r.useState)("");
        return (
          (0, r.useEffect)(() => {
            e.open && a("");
          }, [e.open]),
          (0, l.jsx)(d, {
            ...e,
            title: null,
            mask: !1,
            footer: null,
            width: 660,
            closable: !1,
            maskClosable: !1,
            children: (0, l.jsx)("div", {
              className: "flex gap-2",
              children: (0, l.jsxs)("div", {
                className:
                  "border rounded-[20px] border-secondary p-8 flex-1 bg-gradient-to-t from-laboratory-modal-bg-top to-laboratory-modal-bg-bottom",
                children: [
                  (0, l.jsx)("div", {
                    className: "flex justify-center align-items-start mb-10",
                    children: (0, l.jsx)("span", {
                      className: "typo-heading-1 text-primary",
                      children: "Neutron AI",
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: "flex flex-col gap-8 items-center",
                    children: [
                      (0, l.jsxs)("span", {
                        className: "typo-body-1 text-primary",
                        children: [
                          "Welcome to the Neutron AI!",
                          (0, l.jsx)("br", {}),
                          (0, l.jsx)("br", {}),
                        ],
                      }),
                      (0, l.jsx)(s, {
                        label: "Close",
                        onClick: () => {
                          var t;
                          null === (t = e.onCancel) ||
                            void 0 === t ||
                            t.call(e);
                        },
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      function u() {
        let e = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            e.current && (e.current.playbackRate = 0.5);
          }, []),
          (0, l.jsx)("video", {
            ref: e,
            id: "background-video",
            autoPlay: !0,
            loop: !0,
            muted: !0,
            className:
              "fixed right-0 left-0 top-0 bottom-0 object-cover w-full h-full z-0",
            children: (0, l.jsx)("source", {
              src: "./background.mp4",
              type: "video/mp4",
            }),
          })
        );
      }
      function x(e) {
        let { startPlay: t } = e,
          a = (0, r.useRef)(null),
          [o, n] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!t) return;
            let e = a.current;
            return e
              ? ((e.loop = !0),
                (e.volume = 0.5),
                console.log("playing audio..."),
                e.play().catch((e) => {
                  console.warn("Audioplay failed:", e);
                }),
                () => {
                  e.pause();
                })
              : void 0;
          }, [t]),
          (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)("audio", {
                ref: a,
                id: "background-music",
                src: "./bgmusic.mp3",
              }),
              (0, l.jsx)("button", {
                onClick: () => {
                  let e = a.current;
                  o ? e.pause() : e.play(), n(!o);
                },
                children: o ? "Pause Music" : "Play Music",
              }),
            ],
          })
        );
      }
      var h = a(79321),
        m = { src: "/_next/static/media/loading.b5ffbdc8.gif" };
      function f(e) {
        let {
            icon: t,
            label: a,
            loading: r = !1,
            className: o,
            iconWidth: s,
            ...i
          } = e,
          c = r ? "Loading..." : a || "";
        return (0, l.jsxs)(n(), {
          className:
            "!bg-transparent !border-0 !h-auto p-0 flex flex-col gap-[4px] "
              .concat(o || "", " ")
              .concat(r ? "cursor-wait" : "cursor-pointer"),
          ...i,
          children: [
            (0, l.jsx)("span", {
              className:
                "w-[70px] h-[70px] block relative bg-no-repeat bg-center",
              style: {
                backgroundImage: "url('".concat(
                  "/_next/static/media/Square.7b3a4db8.svg",
                  "')"
                ),
              },
              children: (0, l.jsx)("span", {
                className:
                  "w-[59px] h-[59px] block absolute bg-no-repeat bg-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[50%]",
                style: {
                  backgroundImage: "url('".concat(
                    "/_next/static/media/Circle.8144c682.svg",
                    "')"
                  ),
                },
                children: (0, l.jsx)("span", {
                  className:
                    "w-[47px] h-[47px] block absolute overflow-clip top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[50%]",
                  children: (0, l.jsx)("img", {
                    src: r ? m.src : t,
                    alt: c,
                    className:
                      "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
                    style: { width: s },
                  }),
                }),
              }),
            }),
            c &&
              (0, l.jsx)("span", {
                className:
                  "typo-body-2 text-center text-primary max-w-[110px] whitespace-nowrap !inline-block",
                title: c,
                children: c,
              }),
          ],
        });
      }
      var b = a(44913),
        g = a(91559),
        v = a(31993);
      let y = "applications",
        j = [
          "ClassDps",
          "ClassFighter",
          "ClassTanker",
          "Skill8",
          "Skill9",
          "Skill10",
          "Skill11",
          "Skill12",
          "Skill13",
          "Skill14",
          "Style1",
          "Style2",
          "Style3",
          "Style4",
        ];
      function w(e, t) {
        let a = t.split("/").filter((e) => !!e);
        if (0 === a.length) return e.root;
        let l = a.pop(),
          r = e.root.folders;
        for (let e of a) r = r[e].folders;
        return r[l];
      }
      let N = (e, t) => t + e,
        S = (0, v.U)()(
          (0, g.n)((e, t) => ({
            root: { folders: {}, applications: {} },
            applicationStatusMap: {},
            folderStatusMap: {},
            initApplications: () => {
              e((e) => {
                let t = localStorage.getItem(y);
                if (t) {
                  let a = JSON.parse(t);
                  a["/"]
                    ? ((e.root = {
                        folders: {},
                        applications: a["/"].applications,
                      }),
                      localStorage.setItem(y, JSON.stringify(e.root)))
                    : (e.root = a);
                } else localStorage.setItem(y, JSON.stringify(e.root));
              });
            },
            getApplication: (e, a) => w(t(), a).applications[e],
            addApplication: (t) =>
              e((e) => {
                e.root.applications[t.id] = t;
              }),
            saveApplication: (t) =>
              e((e) => {
                (e.root.applications[t.id] = t),
                  localStorage.setItem(y, JSON.stringify(e.root));
              }),
            removeApplication: (t) =>
              e((e) => {
                delete e.root.applications[t];
              }),
            deleteApplication: (t, a) =>
              e((e) => {
                let l = w(e, a);
                delete l.applications[t],
                  localStorage.setItem(y, JSON.stringify(e.root));
              }),
            moveApplication: (t, a, l) =>
              e((e) => {
                let r = w(e, a),
                  o = w(e, l),
                  n = r.applications[t];
                delete r.applications[t],
                  (o.applications[t] = n),
                  delete e.applicationStatusMap[N(t, a)],
                  localStorage.setItem(y, JSON.stringify(e.root));
              }),
            openApplication: (t, a) => {
              e((e) => {
                var l;
                let r = N(t.id, a);
                (null === (l = e.applicationStatusMap[r]) || void 0 === l
                  ? void 0
                  : l.status) !== "hidden" &&
                  (e.applicationStatusMap[r] = {
                    id: t.id,
                    name: t.name,
                    parentPath: a,
                    status: "open",
                  });
              });
            },
            closeApplication: (t, a) => {
              e((e) => {
                delete e.applicationStatusMap[N(t, a)];
              });
            },
            hideApplication: (t, a) => {
              e((e) => {
                e.applicationStatusMap[N(t, a)].status = "hidden";
              });
            },
            unHideApplication: (t) => {
              e((e) => {
                e.applicationStatusMap[t].status = "open";
              });
            },
            addNewVersion: (t, a, l) => {
              e((e) => {
                let r = w(e, l).applications[t];
                r.versions
                  ? r.versions.push({ htmlContent: a })
                  : (r.versions = [
                      { htmlContent: r.htmlContent },
                      { htmlContent: a },
                    ]),
                  (r.htmlContent = a),
                  localStorage.setItem(y, JSON.stringify(e.root));
              });
            },
            selectVersion: (t, a, l) => {
              e((e) => {
                var r;
                let o = w(e, l).applications[t],
                  n =
                    null === (r = o.versions) || void 0 === r
                      ? void 0
                      : r[a].htmlContent;
                n &&
                  ((o.htmlContent = n),
                  localStorage.setItem(y, JSON.stringify(e.root)));
              });
            },
            addChatText: (t, a, l) => {
              e((e) => {
                let r = w(e, l).applications[t];
                (r.chatHistory = r.chatHistory ? [...r.chatHistory, a] : [a]),
                  localStorage.setItem(y, JSON.stringify(e.root));
              });
            },
            createFolder: () => {
              e((e) => {
                let t = (function (e) {
                  let t = "New folder";
                  if (!e.includes(t)) return t;
                  let a = 2;
                  for (; e.includes("".concat(t, " (").concat(a, ")")); ) a++;
                  return "".concat(t, " (").concat(a, ")");
                })(Object.keys(e.root.folders));
                (e.root.folders[t] = { folders: {}, applications: {} }),
                  localStorage.setItem(y, JSON.stringify(e.root));
              });
            },
            getFolder: (e, a) => w(t(), a).folders[e],
            renameFolder: async (t, a, l) =>
              new Promise((r) => {
                e((e) => {
                  let o = w(e, t);
                  if (l in o.folders) {
                    r(
                      '"'.concat(
                        l,
                        '" already exists. Please choose other name!'
                      )
                    );
                    return;
                  }
                  (o.folders[l] = o.folders[a]),
                    delete o.folders[a],
                    localStorage.setItem(y, JSON.stringify(e.root));
                });
              }),
            deleteFolder: (t) => {
              e((e) => {
                let a = t.split("/").filter((e) => !!e),
                  l = a.pop(),
                  r = w(e, a.join("/"));
                delete r.folders[l],
                  localStorage.setItem(y, JSON.stringify(e.root));
              });
            },
            moveFolder: (t, a, l) => {
              e((e) => {
                if ((l + "/").startsWith(a + t + "/")) return;
                let r = w(e, a),
                  o = w(e, l);
                if (o.folders[t]) return;
                let n = r.folders[t];
                delete r.folders[t],
                  (o.folders[t] = n),
                  localStorage.setItem(y, JSON.stringify(e.root));
              });
            },
            openFolder: (t, a) => {
              e((e) => {
                var l;
                let r = N(t, a);
                (null === (l = e.folderStatusMap[r]) || void 0 === l
                  ? void 0
                  : l.status) !== "hidden" &&
                  (e.folderStatusMap[r] = {
                    name: t,
                    parentPath: a,
                    status: "open",
                  });
              });
            },
            closeFolder: (t, a) => {
              e((e) => {
                delete e.folderStatusMap[N(t, a)];
              });
            },
          }))
        );
      function C() {
        let e = S((e) => e.moveApplication),
          t = S((e) => e.moveFolder);
        return {
          dropHandler: (a, l) => {
            var r, o;
            let n =
                null === (r = a.dataTransfer) || void 0 === r
                  ? void 0
                  : r.getData("application"),
              s =
                null === (o = a.dataTransfer) || void 0 === o
                  ? void 0
                  : o.getData("folder");
            if (n) {
              let t = JSON.parse(n);
              e(t.id, t.path, l);
            }
            if (s) {
              let e = JSON.parse(s);
              t(e.name, e.path, l);
            }
          },
          setApplicationDataTransfer: (e, t) => {
            var a;
            null === (a = e.dataTransfer) ||
              void 0 === a ||
              a.setData("application", JSON.stringify(t));
          },
          setFolderDataTransfer: (e, t) => {
            var a;
            null === (a = e.dataTransfer) ||
              void 0 === a ||
              a.setData("folder", JSON.stringify(t));
          },
        };
      }
      let k = function (e, t) {
          let a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "application";
          return "".concat(t, "-").concat(a, "-").concat(e);
        },
        I = (0, v.U)()(
          (0, g.n)((e) => ({
            indexInfo: { current: 1, lastTriggerId: "" },
            increaseCurrentIndex: (t) =>
              e((e) => {
                t !== e.indexInfo.lastTriggerId &&
                  (e.indexInfo = {
                    current: e.indexInfo.current + 1,
                    lastTriggerId: t,
                  });
              }),
          }))
        );
      function O(e) {
        let { parentPath: t, onContextMenuOpenChanged: a, ...r } = e,
          o = S((e) => e.applicationStatusMap),
          n = S((e) => e.openApplication),
          s = S((e) => e.closeApplication),
          i = S((e) => e.hideApplication),
          c = S((e) => e.deleteApplication),
          d = I((e) => e.increaseCurrentIndex),
          p = () => {
            n({ id: r.id, name: r.name }, t), d(k(r.id, t));
          },
          { setApplicationDataTransfer: u } = C();
        return "loading" === r.status
          ? (0, l.jsx)(f, { loading: !0 })
          : (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)(h.Z, {
                menu: {
                  items: [
                    { key: "open", label: "Open", title: "Open", onClick: p },
                    {
                      key: "close",
                      label: "Close",
                      title: "Close",
                      onClick: () => s(r.id, t),
                      disabled: !o[N(r.id, t)],
                    },
                    {
                      key: "reduce",
                      label: "Reduce",
                      title: "Reduce",
                      onClick: () => i(r.id, t),
                      disabled:
                        !o[N(r.id, t)] || "hidden" === o[N(r.id, t)].status,
                    },
                    {
                      key: "delete",
                      label: "Delete",
                      title: "Delete",
                      onClick: () => c(r.id, t),
                    },
                  ],
                },
                overlayClassName: "dropdown-custom context-menu",
                trigger: ["contextMenu"],
                onOpenChange: a,
                children: (0, l.jsx)(f, {
                  label: r.name,
                  icon: b.c[r.icon || "Sparkle"].src,
                  iconWidth: "32px",
                  onDoubleClick: () => p(),
                  onContextMenu: (e) => e.stopPropagation(),
                  draggable: !0,
                  onDragStart: (e) => {
                    u(e, { id: r.id, path: t });
                  },
                }),
              }),
            });
      }
      var P = a(7047),
        A = "/_next/static/media/close.d6dccf7d.svg";
      let F = (0, c.ZP)(i.Z).withConfig({ componentId: "sc-a0f8dda5-0" })([
        ".ant-modal-content{padding:0;border:none;border-radius:0;background-color:transparent;}",
      ]);
      var M = a(23720);
      function D(e) {
        let { parentPath: t, currentName: a, open: o, onCancel: n } = e,
          [i, c] = (0, r.useState)(a),
          { alertMessage: d } = (0, M.wR)(),
          p = S((e) => e.renameFolder),
          u = async () => {
            let e = await p(t, a, i);
            e && (null == d || d(e));
          };
        return (0, l.jsx)(F, {
          title: null,
          open: o,
          onCancel: n,
          destroyOnClose: !0,
          footer: null,
          width: 554,
          centered: !0,
          closeIcon: null,
          children: (0, l.jsx)("div", {
            className: "flex gap-2",
            children: (0, l.jsxs)("div", {
              className:
                "border rounded-[20px] border-secondary p-8 flex-1 bg-gradient-to-t from-laboratory-modal-bg-top to-laboratory-modal-bg-bottom",
              children: [
                (0, l.jsxs)("div", {
                  className: "flex justify-between align-items-start mb-[40px]",
                  children: [
                    (0, l.jsx)("span", {
                      className:
                        "typo-mech-2 text-[20px] line-height-[25px] text-primary",
                      children: "RENAME FOLDER",
                    }),
                    (0, l.jsx)("span", {
                      className: "custom-cursor-pointer",
                      onClick: n,
                      children: (0, l.jsx)("img", { src: A, alt: "close" }),
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "mb-[8px]",
                  children: (0, l.jsx)(P.default, {
                    className:
                      "rounded-xl border border-secondary p-[16px] text-primary typo-body-2 bg-transparent line-height-[24px] text-[24px] hover:bg-transparent hover:border-secondary focus:bg-transparent focus:border-secondary placeholder:text-primary",
                    value: i,
                    onChange: (e) => c(e.target.value),
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "flex justify-end",
                  children: (0, l.jsx)(s, {
                    label: "Rename",
                    onClick: u,
                    disabled: "" === a || "" === i || a === i,
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function R(e) {
        let { name: t, parentPath: a, onContextMenuOpenChanged: o } = e,
          [s, i] = (0, r.useState)(!1),
          c = S((e) => e.deleteFolder),
          d = S((e) => e.openFolder),
          p = I((e) => e.increaseCurrentIndex),
          u = (0, r.useMemo)(() => a + t, [a, t]),
          { dropHandler: x, setFolderDataTransfer: m } = C();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(h.Z, {
              menu: {
                items: [
                  {
                    key: "delete",
                    label: "Delete",
                    title: "Delete",
                    onClick: () => c(u),
                  },
                  {
                    key: "rename",
                    label: "Rename",
                    title: "Rename",
                    onClick: () => i(!0),
                  },
                ],
              },
              overlayClassName: "dropdown-custom context-menu",
              trigger: ["contextMenu"],
              onOpenChange: o,
              children: (0, l.jsxs)(n(), {
                className:
                  "!bg-transparent !border-0 !h-auto p-0 flex flex-col gap-[4px] cursor-pointer",
                onContextMenu: (e) => e.stopPropagation(),
                onDoubleClick: () => {
                  d(t, a), p(k(t, a, "folder"));
                },
                onDragOver: (e) => {
                  e.preventDefault();
                },
                onDrop: (e) => {
                  e.stopPropagation(), x(e, u);
                },
                draggable: !0,
                onDragStart: (e) => {
                  m(e, { name: t, path: a });
                },
                children: [
                  (0, l.jsx)("span", {
                    className:
                      "w-[70px] h-[70px] block relative bg-no-repeat bg-center",
                    style: {
                      backgroundImage: "url('".concat(b.c.Folder.src, "')"),
                    },
                  }),
                  (0, l.jsx)("span", {
                    className:
                      "typo-body-2 text-center text-primary max-w-[70px] overflow-ellipsis whitespace-nowrap overflow-hidden !inline-block",
                    title: t,
                    children: t,
                  }),
                ],
              }),
            }),
            (0, l.jsx)(D, {
              parentPath: a,
              currentName: t,
              open: s,
              onCancel: () => i(!1),
            }),
          ],
        });
      }
      var _ = a(67288),
        T = a(73935),
        E = a(61193),
        H = a.n(E),
        J = a(1706);
      let Z = c.ZP.div.withConfig({ componentId: "sc-b2f242da-0" })([
        "&,& .panel{border:1px solid #948667;border-radius:20px;background:linear-gradient(180deg,rgba(44,47,55,0.5) 0%,rgba(25,27,32,0.5) 100%);backdrop-filter:blur(24px);padding:0;}.chat-text{background-color:#353638cc;}.restore-btn{background:linear-gradient( 0deg,var(--Semantic-neutral-32,rgba(53,54,56,0.8)),var(--Semantic-neutral-32,rgba(53,54,56,0.8)) ),linear-gradient(180deg,#2c2f37 0%,#191b20 100%);}",
      ]);
      var W = { src: "/_next/static/media/profile.5f714441.svg" },
        z = {
          src: "/_next/static/media/cancel.d6dccf7d.svg",
          height: 25,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        V = {
          src: "/_next/static/media/chat.53b616aa.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        B = {
          src: "/_next/static/media/download.2f81280e.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        U = {
          src: "/_next/static/media/history.38619df5.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        q = {
          src: "/_next/static/media/reduce.fc6fa43d.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        L = {
          src: "/_next/static/media/share.41e926e6.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        G = {
          src: "/_next/static/media/shop.57e83826.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        };
      function X(e) {
        var t, a;
        let { applicationDetail: o, parentPath: n, hidden: i } = e,
          c = S((e) => e.addChatText),
          d = S((e) => e.selectVersion),
          [p, u] = (0, r.useState)(!0),
          [x, h] = (0, r.useState)({ left: 0, top: 0, bottom: 0, right: 0 }),
          m = (0, r.useRef)(null),
          [f, b] = (0, r.useState)({ width: 600, height: 600 }),
          g = I((e) => e.indexInfo),
          v = I((e) => e.increaseCurrentIndex),
          y = document.querySelector("#main-app"),
          j = (e, t) => {
            var a;
            let { clientWidth: l = 0, clientHeight: r = 0 } = y || {},
              o =
                null === (a = m.current) || void 0 === a
                  ? void 0
                  : a.getBoundingClientRect();
            o &&
              h({
                left: -o.left + t.x,
                right: l - (o.right - t.x),
                top: -o.top + t.y,
                bottom: r - (o.bottom - t.y),
              });
          },
          [w, N] = (0, r.useState)(0),
          [C, O] = (0, r.useState)(""),
          {
            config: A,
            showChat: F,
            showAppHistory: M,
          } = (function (e, t) {
            let a = S((e) => e.hideApplication),
              l = S((e) => e.closeApplication),
              [o, n] = (0, r.useState)(!1),
              [s, i] = (0, r.useState)(!1);
            return {
              config: (0, r.useMemo)(
                () => [
                  { label: "Shop", icon: G },
                  { label: "Chat", icon: V, action: () => n((e) => !e) },
                  { label: "History", icon: U, action: () => i((e) => !e) },
                  { label: "Share", icon: L },
                  { label: "Download", icon: B },
                  { label: "Reduce", icon: q, action: () => a(e.id, t) },
                  { label: "Cancel", icon: z, action: () => l(e.id, t) },
                ],
                [n, i, a, l, e]
              ),
              showChat: o,
              showAppHistory: s,
            };
          })(o, n),
          { doPrompt: D, loading: R } = (function () {
            let [e, t] = (0, r.useState)(!1),
              a = S((e) => e.addNewVersion);
            return {
              doPrompt: async (l) => {
                let {
                  id: r,
                  promptValue: o,
                  customsValue: n,
                  parentPath: s,
                } = l;
                if (!e)
                  try {
                    t(!0);
                    let e = await fetch("./api/prompt", {
                        method: "POST",
                        credentials: "same-origin",
                        body: JSON.stringify({ prompt: o, customs: n }),
                        headers: { "Content-Type": "application/json" },
                      }),
                      l = await e.json();
                    a(r, l.data, s);
                  } catch (e) {
                    console.error("error", e);
                  } finally {
                    t(!1);
                  }
              },
              loading: e,
            };
          })();
        return (
          (0, r.useEffect)(() => {
            console.log(g), g.lastTriggerId === k(o.id, n) && N(g.current);
          }, [g, o.id]),
          y &&
            (0, T.createPortal)(
              (0, l.jsx)(H(), {
                disabled: p,
                nodeRef: m,
                bounds: x,
                onStart: (e, t) => j(e, t),
                children: (0, l.jsx)("div", {
                  ref: m,
                  className: "absolute top-2.5 left-2.5 ".concat(
                    i ? "hidden" : ""
                  ),
                  style: { zIndex: w },
                  children: (0, l.jsxs)(Z, {
                    style: { width: f.width + "px", height: f.height + "px" },
                    className: "relative",
                    children: [
                      (0, l.jsx)(J.ResizableBox, {
                        width: f.width,
                        height: f.height,
                        minConstraints: [600, 600],
                        maxConstraints: [1 / 0, 1 / 0],
                        onResize: (e, t) => {
                          let { size: a } = t;
                          return b(a);
                        },
                        resizeHandles: [
                          "s",
                          "se",
                          "sw",
                          "n",
                          "nw",
                          "ne",
                          "e",
                          "w",
                        ],
                        children: (0, l.jsxs)("div", {
                          className: "flex flex-col h-full p-6 pt-0",
                          children: [
                            (0, l.jsxs)("div", {
                              className:
                                "py-6 flex justify-between cursor-move mb-4 border-b border-secondary",
                              onMouseOver: () => {
                                p && u(!1);
                              },
                              onMouseOut: () => {
                                u(!0);
                              },
                              onMouseDown: () => v(k(o.id, n)),
                              children: [
                                (0, l.jsx)("span", {
                                  className: "typo-mech-3 text-primary",
                                  children: o.name,
                                }),
                                (0, l.jsx)("div", {
                                  className: "flex gap-2",
                                  children: A.map((e) =>
                                    (0, l.jsx)(
                                      "button",
                                      {
                                        onClick: e.action,
                                        className:
                                          "p-1 rounded-lg hover:bg-[#FFFFFF14] w-8 h-8",
                                        children: (0, l.jsx)("img", {
                                          src: e.icon.src,
                                          alt: e.label,
                                        }),
                                      },
                                      e.label
                                    )
                                  ),
                                }),
                              ],
                            }),
                            (0, l.jsx)("div", {
                              className: "flex-1 overflow-auto",
                              children: R
                                ? (0, l.jsx)("div", {
                                    className:
                                      "w-full h-full flex justify-center items-center",
                                    children: (0, l.jsx)(_.nI, {
                                      src: "https://lottie.host/7a3439de-ab18-4e92-846a-798295ff47f6/ZOUA4xktVF.lottie",
                                      loop: !0,
                                      autoplay: !0,
                                      style: { width: 92, height: 92 },
                                      width: 960,
                                    }),
                                  })
                                : (0, l.jsx)("iframe", {
                                    srcDoc: o.htmlContent,
                                    className:
                                      "w-full h-full overflow-auto bg-transparent",
                                    title: o.name,
                                  }),
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "w-[400px] left-[-408px] top-0 bottom-0 rounded-[20px] absolute panel ".concat(
                            F ? "" : "hidden"
                          ),
                        children: (0, l.jsxs)("div", {
                          className: "p-6 flex flex-col h-full",
                          children: [
                            (0, l.jsx)("span", {
                              className: "typo-mech-3 uppercase cl-label mb-8",
                              children: "Chat",
                            }),
                            (0, l.jsxs)("div", {
                              className: "flex-1 flex flex-col",
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "flex gap-2 items-center mb-4",
                                  children: [
                                    (0, l.jsx)("img", {
                                      src: W.src,
                                      alt: "Profile",
                                    }),
                                    (0, l.jsx)("span", {
                                      className: "typo-body-2 cl-white",
                                      children: R
                                        ? "Fusing potions..."
                                        : "Hello, my name is ABC. How can I help you?",
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("div", {
                                  className:
                                    "flex flex-col grow shrink-0 basis-0 gap-2 mb-2 items-end overflow-auto",
                                  children:
                                    null === (t = o.chatHistory) || void 0 === t
                                      ? void 0
                                      : t.map((e, t) =>
                                          (0, l.jsx)(
                                            "div",
                                            {
                                              className:
                                                "typo-body-2 cl-label rounded-xl w-[300px] p-3 chat-text",
                                              children: e,
                                            },
                                            t
                                          )
                                        ),
                                }),
                              ],
                            }),
                            (0, l.jsxs)("form", {
                              className: "flex flex-col gap-2",
                              onSubmit: (e) => {
                                e.preventDefault(),
                                  C &&
                                    !R &&
                                    (c(o.id, C, n),
                                    D({
                                      id: o.id,
                                      promptValue: C,
                                      customsValue: o.customsValue,
                                      parentPath: n,
                                    }),
                                    O(""));
                              },
                              children: [
                                (0, l.jsx)(P.default, {
                                  className:
                                    "rounded-xl border border-secondary p-6 text-primary typo-body-2 bg-transparent line-height-[24px] text-[24px] hover:bg-transparent hover:border-secondary focus:bg-transparent focus:border-secondary placeholder:text-primary disabled:border-secondary disabled:opacity-60 h-[56px]",
                                  placeholder: "Spell...",
                                  value: C,
                                  onChange: (e) => O(e.target.value),
                                  disabled: R,
                                }),
                                (0, l.jsx)(s, {
                                  label: "SEND",
                                  className: "w-full",
                                  disabled: R || !C,
                                  htmlType: "submit",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "w-[361px] right-[-369px] top-0 bottom-0 rounded-[20px] absolute panel ".concat(
                            M ? "" : "hidden"
                          ),
                        children: (0, l.jsxs)("div", {
                          className: "p-6 flex flex-col h-full",
                          children: [
                            (0, l.jsx)("span", {
                              className: "typo-mech-3 uppercase cl-label mb-8",
                              children: "App history",
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "grow shrink-0 basis-0 flex flex-col overflow-auto gap-2",
                              children:
                                null === (a = o.versions) || void 0 === a
                                  ? void 0
                                  : a.map((e, t) =>
                                      (0, l.jsxs)(
                                        "div",
                                        {
                                          className:
                                            "rounded-xl border border-secondary flex justify-between",
                                          children: [
                                            (0, l.jsxs)("span", {
                                              className:
                                                "typo-body-2 cl-label p-3",
                                              children: ["Version: ", t],
                                            }),
                                            (0, l.jsx)("button", {
                                              className:
                                                "typo-body-2 cl-label restore-btn p-3 rounded-[10px]",
                                              onClick: () => d(o.id, t, n),
                                              children: "Restore",
                                            }),
                                          ],
                                        },
                                        t
                                      )
                                    ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              y
            )
        );
      }
      var K = a(84772),
        Q = { src: "/_next/static/media/cancel.d6dccf7d.svg" };
      let Y = c.ZP.div.withConfig({ componentId: "sc-b2f242da-0" })([
        "&,& .panel{border:1px solid #948667;border-radius:20px;background:linear-gradient(180deg,rgba(44,47,55,0.5) 0%,rgba(25,27,32,0.5) 100%);backdrop-filter:blur(24px);padding:0;}.chat-text{background-color:#353638cc;}.restore-btn{background:linear-gradient( 0deg,var(--Semantic-neutral-32,rgba(53,54,56,0.8)),var(--Semantic-neutral-32,rgba(53,54,56,0.8)) ),linear-gradient(180deg,#2c2f37 0%,#191b20 100%);}",
      ]);
      function $(e) {
        let { folderName: t, folderDetail: a, parentPath: o } = e,
          n = S((e) => e.closeFolder),
          [s, i] = (0, r.useState)(!0),
          [c, d] = (0, r.useState)({ left: 0, top: 0, bottom: 0, right: 0 }),
          p = (0, r.useRef)(null),
          u = (0, r.useRef)(null),
          [x, h] = (0, r.useState)({ width: 600, height: 500 }),
          m = I((e) => e.indexInfo),
          f = I((e) => e.increaseCurrentIndex),
          b = document.querySelector("#main-app"),
          [g, v] = (0, r.useState)(0),
          y = (e, t) => {
            var a;
            let { clientWidth: l = 0, clientHeight: r = 0 } = b || {},
              o =
                null === (a = p.current) || void 0 === a
                  ? void 0
                  : a.getBoundingClientRect();
            o &&
              d({
                left: -o.left + t.x,
                right: l - (o.right - t.x),
                top: -o.top + t.y,
                bottom: r - (o.bottom - t.y),
              });
          },
          { dropHandler: j } = C();
        return ((0, r.useEffect)(() => {
          u.current && open && new K.Z(u.current, { wheelPropagation: !0 });
        }, [open]),
        (0, r.useEffect)(() => {
          m.lastTriggerId === k(t, o, "folder") && v(m.current);
        }, [m, t]),
        open)
          ? b &&
              (0, T.createPortal)(
                (0, l.jsx)(H(), {
                  disabled: s,
                  nodeRef: p,
                  bounds: c,
                  onStart: (e, t) => y(e, t),
                  children: (0, l.jsx)("div", {
                    ref: p,
                    className: "absolute top-2.5 left-2.5",
                    style: { zIndex: g },
                    children: (0, l.jsx)(Y, {
                      style: { width: x.width + "px", height: x.height + "px" },
                      className: "relative",
                      children: (0, l.jsx)(J.ResizableBox, {
                        width: x.width,
                        height: x.height,
                        minConstraints: [600, 600],
                        maxConstraints: [1 / 0, 1 / 0],
                        onResize: (e, t) => {
                          let { size: a } = t;
                          return h(a);
                        },
                        resizeHandles: [
                          "s",
                          "se",
                          "sw",
                          "n",
                          "nw",
                          "ne",
                          "e",
                          "w",
                        ],
                        children: (0, l.jsxs)("div", {
                          className: "flex flex-col h-full p-6 pt-0",
                          children: [
                            (0, l.jsxs)("div", {
                              className:
                                "py-6 flex justify-between cursor-move mb-4",
                              onMouseOver: () => {
                                s && i(!1);
                              },
                              onMouseOut: () => {
                                i(!0);
                              },
                              onMouseDown: () => f(k(t, o, "folder")),
                              children: [
                                (0, l.jsxs)("span", {
                                  className: "typo-mech-2 text-primary",
                                  children: [o, t],
                                }),
                                (0, l.jsx)("div", {
                                  className: "flex gap-2",
                                  children: (0, l.jsx)("button", {
                                    onClick: () => n(t, o),
                                    className:
                                      "p-1 rounded-lg hover:bg-[#FFFFFF14] w-8 h-8",
                                    children: (0, l.jsx)("img", {
                                      src: Q.src,
                                      alt: "Cancel",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, l.jsx)("div", {
                              ref: u,
                              className: "flex-1 overflow-auto relative ps",
                              onDragOver: (e) => e.preventDefault(),
                              onDrop: (e) => {
                                e.stopPropagation(), j(e, o + t);
                              },
                              children: (0, l.jsxs)("div", {
                                className:
                                  " flex justify-start items-start flex-wrap gap-[40px]",
                                children: [
                                  Object.entries(a.applications || {}).map(
                                    (e) => {
                                      let [a, r] = e;
                                      return (0, l.jsx)(
                                        O,
                                        { ...r, parentPath: o + t + "/" },
                                        a
                                      );
                                    }
                                  ),
                                  Object.entries(a.folders || {}).map((e) => {
                                    let [a] = e;
                                    return (0, l.jsx)(
                                      R,
                                      { name: a, parentPath: o + t + "/" },
                                      a
                                    );
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
                b
              )
          : (0, l.jsx)(l.Fragment, {});
      }
      function ee() {
        let e = S((e) => e.root),
          t = S((e) => e.applicationStatusMap),
          a = S((e) => e.getApplication),
          o = S((e) => e.folderStatusMap),
          n = S((e) => e.getFolder),
          [s, i] = (0, r.useState)(!1),
          c = S((e) => e.createFolder);
        return (0, l.jsx)(h.Z, {
          menu: {
            items: [
              {
                key: "newFolder",
                label: "New Folder",
                title: "New Folder",
                onClick: () => c(),
              },
            ],
          },
          overlayClassName: "dropdown-custom context-menu",
          trigger: ["contextMenu"],
          open: s,
          onOpenChange: i,
          children: (0, l.jsx)("main", {
            className: "w-full h-[calc(100%-90px)]",
            children: (0, l.jsxs)("div", {
              className:
                "w-full flex flex-col flex-wrap relative h-full content-start gap-[24px] p-[24px] pt-16 md:p-[24px] overflow-hidden",
              id: "main-app",
              children: [
                (0, l.jsx)(f, {
                  icon: b.c.Telegram.src,
                  label: "Telegram",
                  href: "https://t.me/neutron_ai_eth",
                  target: "_blank",
                  onContextMenu: (e) => {
                    e.stopPropagation(), e.preventDefault();
                  },
                }),
                (0, l.jsx)(f, {
                  icon: b.c.Twitter.src,
                  label: "Twitter",
                  href: "https://x.com/neutron_ai_eth",
                  target: "_blank",
                  onContextMenu: (e) => {
                    e.stopPropagation(), e.preventDefault();
                  },
                }),
                (0, l.jsx)(f, {
                  icon: b.c.Dexscreener.src,
                  label: "Dexscreener",
                  href: "https://dexscreener.com/ethereum/",
                  target: "_blank",
                  onContextMenu: (e) => {
                    e.stopPropagation(), e.preventDefault();
                  },
                }),
                Object.entries(e.applications || {}).map((e) => {
                  let [t, a] = e;
                  return (0, l.jsx)(
                    O,
                    {
                      ...a,
                      onContextMenuOpenChanged: (e) => {
                        e && i(!1);
                      },
                      parentPath: "/",
                    },
                    t
                  );
                }),
                Object.entries(e.folders || {}).map((e) => {
                  let [t] = e;
                  return (0, l.jsx)(
                    R,
                    {
                      name: t,
                      onContextMenuOpenChanged: (e) => {
                        e && i(!1);
                      },
                      parentPath: "/",
                    },
                    t
                  );
                }),
                Object.entries(t).map((e) => {
                  let [t, r] = e;
                  return (0, l.jsx)(
                    X,
                    {
                      parentPath: r.parentPath,
                      applicationDetail: a(r.id, r.parentPath),
                      hidden: "hidden" === r.status,
                    },
                    t
                  );
                }),
                Object.entries(o).map((e) => {
                  let [t, a] = e;
                  return (0, l.jsx)(
                    $,
                    {
                      folderName: a.name,
                      parentPath: a.parentPath,
                      folderDetail: n(a.name, a.parentPath),
                    },
                    t
                  );
                }),
              ],
            }),
          }),
        });
      }
      function et(e) {
        let { label: t, value: a, options: o, onChange: n, maxHeight: s } = e,
          i = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            new K.Z(i.current, { wheelPropagation: !0 });
          }, []),
          (0, l.jsxs)("div", {
            className: "flex flex-col gap-[40px]",
            children: [
              (0, l.jsx)("span", {
                className: "typo-mech-3 text-primary uppercase",
                children: t,
              }),
              (0, l.jsx)("div", {
                ref: i,
                className:
                  "flex flex-col gap-[19px] overflow-y-auto relative ps",
                style: { maxHeight: s },
                children: o.map((e, t) =>
                  (0, l.jsxs)(
                    "label",
                    {
                      className: "flex gap-[8px] custom-cursor-pointer ".concat(
                        e.disabled ? "opacity-60 pointer-events-none" : ""
                      ),
                      children: [
                        (0, l.jsx)("span", {
                          className:
                            " w-[24px] h-[24px] relative cursor-pointer before:absolute before:block before:rounded-[7px] before:w-[24px] before:h-[24px] before:top-0 before:left-0 before:border-[1px] before:border-primary  [&:has(input:checked)]:after:absolute [&:has(input:checked)]:after:block [&:has(input:checked)]:after:w-[5px] [&:has(input:checked)]:after:h-[10px] [&:has(input:checked)]:after:top-[50%] [&:has(input:checked)]:after:left-[50%] [&:has(input:checked)]:after:translate-x-[-50%] [&:has(input:checked)]:after:translate-y-[-50%] [&:has(input:checked)]:after:border-primary [&:has(input:checked)]:after:border-r-2 [&:has(input:checked)]:after:border-b-2 [&:has(input:checked)]:after:rotate-[45deg] [&:has(input:checked)]:after:mt-[-0.5px] ",
                          children: (0, l.jsx)("input", {
                            type: "checkbox",
                            value: e.value,
                            checked: a.includes(e.value),
                            onChange: () => {
                              a.includes(e.value)
                                ? n(a.filter((t) => t !== e.value))
                                : n([...a, e.value]);
                            },
                            className: "appearance-none",
                          }),
                        }),
                        (0, l.jsx)("span", {
                          className: "flex items-center min-h-[24px]",
                          children: (0, l.jsx)("span", {
                            className: "typo-body-2 cl-label",
                            children: e.label,
                          }),
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          })
        );
      }
      a(78280);
      let ea = {
        0: "Auto",
        2: "Weather API",
        5: "Maps API",
        6: "OCR Analyzer",
        8: "City Guesser API",
        9: "Stocks API",
        12: "Currency API",
        13: "News API",
        18: "Translation API",
      };
      function el(e) {
        let { label: t, onClick: a, disabled: r } = e;
        return (0, l.jsx)(n(), {
          className:
            "!bg-transparent !border-0 !h-auto p-0 flex flex-col gap-[4px]",
          style: {
            opacity: r ? 0.6 : void 0,
            pointerEvents: r ? "none" : void 0,
          },
          onClick: r ? void 0 : a,
          children: (0, l.jsx)("span", {
            className:
              "w-[221px] h-[68px] block relative bg-no-repeat bg-center",
            style: {
              backgroundImage: "url('".concat(
                "/_next/static/media/bg-type-3.65467363.svg",
                "')"
              ),
            },
            children: (0, l.jsx)("span", {
              className:
                "typo-mech-3 text-center text-primary absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] uppercase",
              children: t,
            }),
          }),
        });
      }
      var er = a(20282);
      function eo(e) {
        return (0, l.jsx)(er.Z, {
          ...e,
          className:
            "rounded-xl border border-secondary p-6 text-primary typo-body-2 bg-transparent line-height-[24px] text-[24px]\n      hover:bg-transparent hover:border-secondary focus:bg-transparent focus:border-secondary placeholder:text-primary \n      ".concat(
              e.className || ""
            ),
          variant: "outlined",
        });
      }
      var en = a(88773);
      let es = (0, c.ZP)(i.Z).withConfig({ componentId: "sc-a0f8dda5-0" })([
        ".ant-modal-content{padding:0;border:none;border-radius:0;background-color:transparent;}",
      ]);
      function ei(e) {
        let [t, a] = (0, r.useState)(!0),
          [o, n] = (0, r.useState)({ left: 0, top: 0, bottom: 0, right: 0 }),
          i = (0, r.useRef)(null),
          [c, d] = (0, r.useState)(!1),
          [p, u] = (0, r.useState)(""),
          [x, h] = (0, r.useState)([]),
          { doPrompt: m, loading: f } = (function (e) {
            let [t, a] = (0, r.useState)(!1),
              l = S((e) => e.addApplication),
              o = S((e) => e.removeApplication),
              n = S((e) => e.saveApplication);
            return {
              doPrompt: async (r, s) => {
                if (t) return;
                let i = (0, en.Z)();
                try {
                  a(!0),
                    l({ id: i, name: "", htmlContent: "", status: "loading" });
                  let t = await fetch("./api/prompt", {
                      method: "POST",
                      credentials: "same-origin",
                      body: JSON.stringify({ prompt: r, customs: s }),
                      headers: { "Content-Type": "application/json" },
                    }),
                    o = await t.json();
                  n({
                    id: i,
                    icon: j[Math.floor(Math.random() * j.length)],
                    name: o.name || "App",
                    htmlContent: o.data,
                    status: "saved",
                    customsValue: s,
                  }),
                    a(!1),
                    e();
                } catch (e) {
                  console.error("error", e), o(i);
                }
              },
              loading: t,
            };
          })(() => {
            var t;
            return null === (t = e.onCancel) || void 0 === t
              ? void 0
              : t.call(e);
          }),
          b = (e, t) => {
            var a;
            let { clientWidth: l, clientHeight: r } =
                window.document.documentElement,
              o =
                null === (a = i.current) || void 0 === a
                  ? void 0
                  : a.getBoundingClientRect();
            o &&
              n({
                left: -o.left + t.x,
                right: l - (o.right - t.x),
                top: -o.top + t.y,
                bottom: r - (o.bottom - t.y),
              });
          };
        return (
          (0, r.useEffect)(() => {
            e.open && (u(""), h([]), d(!1));
          }, [e.open]),
          (0, l.jsx)(es, {
            ...e,
            title: null,
            modalRender: (e) =>
              (0, l.jsx)(H(), {
                disabled: t,
                bounds: o,
                nodeRef: i,
                onStart: (e, t) => b(e, t),
                children: (0, l.jsx)("div", { ref: i, children: e }),
              }),
            mask: !1,
            footer: null,
            width: c ? 1030 : 660,
            closable: !1,
            maskClosable: !1,
            children: (0, l.jsxs)("div", {
              className: "flex gap-2",
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "border rounded-[20px] border-secondary p-8 flex-1 bg-gradient-to-t from-laboratory-modal-bg-top to-laboratory-modal-bg-bottom",
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "flex justify-between align-items-start mb-10 cursor-move",
                      onMouseOver: () => {
                        t && a(!1);
                      },
                      onMouseOut: () => {
                        a(!0);
                      },
                      children: [
                        (0, l.jsx)("span", {
                          className: "typo-mech-2 text-primary",
                          children: "REACTOR",
                        }),
                        (0, l.jsx)("span", {
                          className: "custom-cursor-pointer",
                          onClick: e.onCancel,
                          children: (0, l.jsx)("img", { src: A, alt: "close" }),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex flex-col gap-8 items-center",
                      children: [
                        (0, l.jsx)(eo, {
                          rows: 5,
                          placeholder:
                            "Greetings, Welcome to the Neutron Reactor",
                          value: p,
                          onChange: (e) => u(e.target.value),
                        }),
                        (0, l.jsx)(s, {
                          label: "ADD CUSTOM FEATURE",
                          className: "w-full",
                          onClick: () => d(!c),
                        }),
                        (0, l.jsx)(el, {
                          label: "Assemble",
                          disabled: f || !p,
                          onClick: () => {
                            var t;
                            null === (t = e.onCancel) ||
                              void 0 === t ||
                              t.call(e),
                              m(p, x.join(","));
                          },
                        }),
                      ],
                    }),
                  ],
                }),
                c &&
                  (0, l.jsx)("div", {
                    className:
                      "border rounded-[20px] border-secondary p-8 w-[361px] bg-gradient-to-t from-laboratory-modal-bg-top to-laboratory-modal-bg-bottom",
                    children: (0, l.jsx)(et, {
                      label: "Custom Feature",
                      options: Object.entries(ea).map((e) => {
                        let [t, a] = e;
                        return {
                          label: a,
                          value: t,
                          disabled: "0" !== t && x.includes("0"),
                        };
                      }),
                      value: x,
                      onChange: (e) => {
                        if (e.includes("0")) {
                          h(["0"]);
                          return;
                        }
                        h(e);
                      },
                      maxHeight: "393px",
                    }),
                  }),
              ],
            }),
          })
        );
      }
      function ec() {
        let [e, t] = (0, r.useState)(!1),
          a = S((e) => e.applicationStatusMap),
          o = S((e) => e.unHideApplication);
        return (0, l.jsxs)("footer", {
          className:
            "absolute bottom-0 flex gap-[32px] p-[24px] z-0 overflow-x-auto max-w-full",
          children: [
            (0, l.jsx)(s, { label: "Reactor", onClick: () => t(!0) }),
            (0, l.jsx)(s, { label: "Trade Depot" }),
            Object.entries(a).map((e) => {
              let [t, a] = e;
              return (0, l.jsx)(
                s,
                {
                  label: a.name,
                  disabled: "hidden" !== a.status,
                  onClick: () => o(t),
                },
                a.id
              );
            }),
            (0, l.jsx)(ei, { open: e, onCancel: () => t(!1) }),
          ],
        });
      }
      var ed = a(68931);
      function ep() {
        let e = S((e) => e.initApplications),
          [t, a] = (0, r.useState)(!0),
          [o, n] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            e();
          }, []),
          (0, l.jsxs)("div", {
            className:
              "w-full h-screen !bg-no-repeat !bg-bottom image-pixel relative overflow-hidden rpgui-cursor-default !bg-cover",
            children: [
              (0, l.jsx)(u, {}),
              (0, l.jsx)(x, { startPlay: o }),
              (0, l.jsx)(ee, {}),
              (0, l.jsx)(ec, {}),
              (0, l.jsx)("div", {
                className: "absolute right-0 top-0 mt-6 mr-6",
                children: (0, l.jsx)(ed.NL, {}),
              }),
              (0, l.jsx)(p, {
                open: t,
                onCancel: () => {
                  a(!1), n(!0);
                },
              }),
            ],
          })
        );
      }
      function eu() {
        return (0, l.jsx)(ep, {});
      }
    },
  },
  function (e) {
    e.O(0, [5085, 7341, 2888, 9774, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
