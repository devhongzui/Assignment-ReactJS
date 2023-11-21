@extends('layouts.web-app')

@section('main')
    <div class="container">
        <div class="mb-3">
            @php
                /** @var \App\Models\Course $course */
            @endphp
            <x-page.detail :link="route('course', $course->id)"
                           :image="(object) ['data_src' => asset($course->image), 'class' => 'object-fit-contain p-2']"
                           sub-title="" :title="$web_title" :description="$web_description"
                           :pills="[
                    (object) [
                        'class' => 'bg-primary',
                        'description' => __(':number subjects', ['number' => $course->subjects()->count()]),
                    ],
                ]" />
        </div>

        @include('study.course.lazy')
    </div>
@endsection
