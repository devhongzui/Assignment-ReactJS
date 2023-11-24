<div class="mb-3">
    <h2 class="text-center m-2">@lang('Tools')</h2>
    @include('study.courses.lazy', [
        'data' => $tools,
        'route' => 'tool',
    ])
</div>
