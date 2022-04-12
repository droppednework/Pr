const routes = [{
        path: "/",
        component: () =>
            import ("layouts/MenuLayout.vue"),
        children: [{
                path: "",
                component: () =>
                    import ("pages/IndexPage.vue")
            },

            {
                path: "/ProfilePage",
                component: () =>
                    import ("src/pages/ProfilePage.vue")
            },
            {
                path: "/AffiliatesPage",
                component: () =>
                    import ("src/pages/AffiliatesPage.vue")
            },
            {
                path: "/ProjectPage",
                component: () =>
                    import ("src/pages/ProjectPage.vue")
            },
            {
                path: "/RecordPage",
                component: () =>
                    import ("src/pages/RecordPage.vue")
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () =>
            import ("pages/ErrorNotFound.vue"),
    },
];

export default routes;