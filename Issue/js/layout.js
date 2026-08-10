// =====================================================
// GENERIC SIDEBAR
// =====================================================

document.getElementById("sidebar").innerHTML = `

    <aside class="sidebar" id="sidebarPanel">

        <!-- LOGO -->
        <div class="sidebar-logo">

            <div class="logo-mark">
                E
            </div>

            <div class="logo-text">
                <h2>EAM</h2>
                <span>Enterprise Asset Management</span>
            </div>

        </div>


        <!-- SIDEBAR MENU -->
        <nav class="sidebar-menu">

            <!-- Home -->
            <a href="index.html" class="menu-item" data-page="home">

                <span class="menu-icon">⌂</span>

                <span class="menu-text">
                    Home
                </span>

            </a>


            <!-- Dashboard -->
            <a href="dashboard.html" class="menu-item" data-page="dashboard">

                <span class="menu-icon">▦</span>

                <span class="menu-text">
                    Dashboard
                </span>

            </a>


            <!-- GRN -->
            <a href="grn.html" class="menu-item" data-page="grn">

                <span class="menu-icon">▣</span>

                <span class="menu-text">
                    GRN
                </span>

                <span class="menu-arrow">
                    ›
                </span>

            </a>


            <!-- Asset -->
            <a href="assets.html" class="menu-item" data-page="asset">

                <span class="menu-icon">◇</span>

                <span class="menu-text">
                    Asset
                </span>

                <span class="menu-arrow">
                    ›
                </span>

            </a>


            <!-- ==========================================
                 ISSUE MENU
            =========================================== -->

            <div class="menu-group">

                <button
                    class="menu-item menu-parent"
                    id="issueMenuButton"
                    type="button"
                >

                    <span class="menu-icon">▣</span>

                    <span class="menu-text">
                        Issue
                    </span>

                    <span class="menu-arrow" id="issueArrow">
                        ⌄
                    </span>

                </button>


                <!-- Issue Sub Menu -->

                <div class="submenu" id="issueSubmenu">

                    <a
                        href="issue-list.html"
                        class="submenu-item"
                        data-page="issue-list"
                    >
                        <span class="submenu-dot"></span>
                        List
                    </a>


                    <a
                        href="issue-create.html"
                        class="submenu-item"
                        data-page="issue-create"
                    >
                        <span class="submenu-dot"></span>
                        Create New
                    </a>

                </div>

            </div>


            <!-- Receipts -->
            <a href="receipts.html" class="menu-item" data-page="receipts">

                <span class="menu-icon">◁</span>

                <span class="menu-text">
                    Receipts
                </span>

                <span class="menu-arrow">
                    ›
                </span>

            </a>


            <!-- Acknowledgement -->
            <a
                href="acknowledgement.html"
                class="menu-item"
                data-page="acknowledgement"
            >

                <span class="menu-icon">✓</span>

                <span class="menu-text">
                    Acknowledgement
                </span>

                <span class="menu-arrow">
                    ›
                </span>

            </a>


            <!-- Asset Barcode -->
            <a
                href="asset-barcode.html"
                class="menu-item"
                data-page="asset-barcode"
            >

                <span class="menu-icon">▥</span>

                <span class="menu-text">
                    Asset Barcode
                </span>

                <span class="menu-arrow">
                    ›
                </span>

            </a>


            <!-- Contracts -->
            <a
                href="contracts.html"
                class="menu-item"
                data-page="contracts"
            >

                <span class="menu-icon">▤</span>

                <span class="menu-text">
                    Contracts
                </span>

                <span class="menu-arrow">
                    ›
                </span>

            </a>


            <!-- Generate Gate Pass -->
            <a
                href="gate-pass.html"
                class="menu-item"
                data-page="gate-pass"
            >

                <span class="menu-icon">▱</span>

                <span class="menu-text">
                    Generate Gate Pass
                </span>

                <span class="menu-arrow">
                    ›
                </span>

            </a>


            <!-- Audit -->
            <a href="audit.html" class="menu-item" data-page="audit">

                <span class="menu-icon">✓</span>

                <span class="menu-text">
                    Audit
                </span>

            </a>


            <!-- Finance Operation -->
            <a
                href="finance-operation.html"
                class="menu-item"
                data-page="finance-operation"
            >

                <span class="menu-icon">$</span>

                <span class="menu-text">
                    Finance Operation
                </span>

            </a>


            <!-- Reports -->
            <a href="reports.html" class="menu-item" data-page="reports">

                <span class="menu-icon">★</span>

                <span class="menu-text">
                    Reports
                </span>

            </a>

        </nav>


        <!-- SIDEBAR FOOTER -->

        <div class="sidebar-footer">

            <button
                class="collapse-button"
                id="menuToggle"
                type="button"
            >

                <span class="collapse-icon">
                    «
                </span>

                <span class="menu-text">
                    Collapse Sidebar
                </span>

            </button>

        </div>

    </aside>
`;


// =====================================================
// GENERIC HEADER
// =====================================================

document.getElementById("header").innerHTML = `

    <header class="header">

        <!-- LEFT SIDE -->

        <div class="header-left">

            <button
                class="header-menu-button"
                id="headerMenuToggle"
                type="button"
            >
                ☰
            </button>


            <div class="header-search">

                <button class="search-module">
                    Assets
                </button>

                <input
                    type="text"
                    placeholder="Search assets, transactions..."
                >

                <span class="search-icon">
                    ⌕
                </span>

            </div>

        </div>


        <!-- RIGHT SIDE -->

        <div class="header-right">

            <!-- Notification -->

            <button class="notification-button">

                ♧

                <span class="notification-count">
                    5
                </span>

            </button>


            <!-- Theme -->

            <button class="theme-button">
                ☾
            </button>


            <!-- User -->

            <div class="user-profile">

                <div class="user-details">

                    <span class="welcome-text">
                        Welcome!
                    </span>

                    <strong>
                        ASADMIN [Beah]
                    </strong>

                </div>


                <div class="user-avatar">
                    A
                </div>

            </div>

        </div>

    </header>
`;


// =====================================================
// GENERIC FOOTER
// =====================================================

document.getElementById("footer").innerHTML = `

    <footer class="footer">

        <span>
            © 2026 Reachwell Solutions. All rights reserved.
        </span>

        <span>
            Powered by:
            <strong>Reachwell</strong>
        </span>

    </footer>
`;


// =====================================================
// ISSUE SUBMENU
// =====================================================

const issueMenuButton =
    document.getElementById("issueMenuButton");

const issueSubmenu =
    document.getElementById("issueSubmenu");

const issueArrow =
    document.getElementById("issueArrow");


issueMenuButton.addEventListener("click", function () {

    issueSubmenu.classList.toggle("open");

    issueMenuButton.classList.toggle("expanded");

});


// =====================================================
// SIDEBAR COLLAPSE
// =====================================================

const menuToggle =
    document.getElementById("menuToggle");

const headerMenuToggle =
    document.getElementById("headerMenuToggle");


function toggleSidebar() {

    document.body.classList.toggle(
        "sidebar-collapsed"
    );

}


menuToggle.addEventListener(
    "click",
    toggleSidebar
);


headerMenuToggle.addEventListener(
    "click",
    toggleSidebar
);


// =====================================================
// ACTIVE PAGE
// =====================================================

const currentPage =
    window.location.pathname
        .split("/")
        .pop()
        .replace(".html", "");


const menuItems =
    document.querySelectorAll(
        "[data-page]"
    );


menuItems.forEach(function (item) {

    const page =
        item.getAttribute("data-page");


    if (
        page === currentPage ||
        (currentPage === "" && page === "home")
    ) {

        item.classList.add("active");

    }

});


// =====================================================
// OPEN ISSUE MENU WHEN ISSUE PAGE IS ACTIVE
// =====================================================

if (
    currentPage === "issue-list" ||
    currentPage === "issue-create"
) {

    issueSubmenu.classList.add("open");

    issueMenuButton.classList.add("expanded");

}