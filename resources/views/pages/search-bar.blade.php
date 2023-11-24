@vite('resources/js/pages/search-bar.js')

<label for="search-query" class="visually-hidden"></label>
<input id="search-query" class="form-control border-primary bg-transparent mb-2" name="query" type="text"
       data-action="{{ route('search') }}" placeholder="@lang('Input Query')">

<div id="search-result"></div>
