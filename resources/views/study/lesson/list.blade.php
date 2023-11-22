<div class="card">
    <h3 class="card-header">@lang('Next lesson')</h3>
    <div class="card-body">
        @foreach ($prev_lessons as $prev_lesson)
            @include('study.lesson.list.item', ['item' => $prev_lesson, 'old' => true])
        @endforeach

        @include('study.lesson.list.item', ['item' => $lesson, 'recent' => true])

        @foreach ($next_lessons as $next_lesson)
            @include('study.lesson.list.item', ['item' => $next_lesson])
        @endforeach
    </div>
</div>
