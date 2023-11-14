<ul class="navbar-nav">
    <li class="nav-item">
        <a href="#" aria-label="@lang('Courses')"
           class="nav-link text-end @if ($course_page ?? false) active @endif">
            @lang('Courses')
        </a>
    </li>
    <li class="nav-item">
        <a href="#" aria-label="@lang('Tools')"
           class="nav-link text-end @if ($tool_page ?? false) active @endif">
            @lang('Tools')
        </a>
    </li>
    <li class="nav-item">
        <a href="#" aria-label="@lang('Musics')"
           class="nav-link text-end @if ($music_page ?? false) active @endif">
            @lang('Musics')
        </a>
    </li>
</ul>
