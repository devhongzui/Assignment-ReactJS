<div class="mb-3">
    <h2 class="text-center m-2">@lang('Lessons')</h2>
    @include('study.course.lazy', [
        'data' => $lessons,
        'route' => 'lesson',
    ])
</div>

<div class="mb-3">
    <h2 class="text-center m-2">@lang('Subjects')</h2>
    @include('study.course.lazy', [
        'data' => $subjects,
        'route' => 'subject',
    ])
</div>

<div class="mb-3">
    <h2 class="text-center m-2">@lang('Courses')</h2>
    @include('study.courses.lazy', [
        'data' => $courses,
        'route' => 'course',
    ])
</div>

<div class="mb-3">
    <h2 class="text-center m-2">@lang('Channels')</h2>
    @include('study.channel.lazy', [
        'data' => $channels,
        'route' => 'channel',
    ])
</div>
