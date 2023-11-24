@vite('resources/js/pages/search-bar.js')

<label for="search-query" class="visually-hidden"></label>
<input id="search-query" class="form-control border-primary bg-transparent mb-2" name="query" type="text"
       data-action="{{ route('search') }}" placeholder="@lang('Input Query')">

<ul class="nav nav-underline" role="tablist">
    <li class="nav-item" role="presentation">
        <button data-bs-toggle="tab" type="button" role="tab" class="nav-link active px-2"
                data-bs-target="#study-search-result" aria-controls="study-search-result" aria-selected="true">
            @lang('Courses')
        </button>
    </li>

    <li class="nav-item" role="presentation">
        <button data-bs-toggle="tab" type="button" role="tab" class="nav-link px-2"
                data-bs-target="#tools-search-result" aria-controls="tools-search-result" aria-selected="false">
            @lang('Tools')
        </button>
    </li>

    <li class="nav-item" role="presentation">
        <button data-bs-toggle="tab" type="button" role="tab" class="nav-link px-2"
                data-bs-target="#musics-search-result" aria-controls="musics-search-result" aria-selected="false">
            @lang('Musics')
        </button>
    </li>
</ul>

<div class="tab-content">
    <div id="study-search-result" class="tab-pane fade active show" role="tabpanel" tabindex="0"></div>
    <div id="tools-search-result" class="tab-pane fade" role="tabpanel" tabindex="0"></div>
    <div id="musics-search-result" class="tab-pane fade" role="tabpanel" tabindex="0"></div>
</div>
