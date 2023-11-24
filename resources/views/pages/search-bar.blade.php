@vite('resources/js/pages/search-bar.js')

<form action="{{ route('search') }}" method="post" id="search-form" class="row">
    <fieldset class="col-lg-9">
        <label for="search-query" class="visually-hidden"></label>
        <input id="search-query" class="form-control border-primary bg-transparent mb-2" name="query" type="text"
               placeholder="@lang('Input Query')">
    </fieldset>
    <div class="col-lg-3">
        <button class="btn btn-primary w-100 mb-2" type="submit" role="button" aria-label="@lang('Search')"
                disabled>
            @lang('Search')
        </button>
    </div>
</form>

<div id="search-result"></div>
