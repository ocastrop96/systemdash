<aside class="main-sidebar elevation-4 sidebar-light-info">
    <!-- Brand Logo -->
    <a href="dashboard" class="brand-link">
        <img src="public/views/resources/img/mrms-logo.png" alt="MRMS-logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-bolder">TCD-Web</span>
    </a>

    <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="public/views/resources/img/sidebar-logo.jpg" class="img-circle elevation-2" alt="LOGIN TCD">
            </div>
            <div class="info">
                <a href="dashboard" class="d-block font-weight-bolder">Hola! <?php echo $_SESSION["loginNombresU"]; ?></a>
            </div>
        </div>

        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <a href="dashboard" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            Dashboard
                        </p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>