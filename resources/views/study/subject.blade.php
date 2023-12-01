@extends('layouts.web-app')

@section('main')
    <div class="container">
        <div class="mb-3">
            @php
                /** @var \App\Models\Subject $subject */
            @endphp
            <x-page.detail link="https://www.youtube.com/playlist?list={{ $subject->url }}"
                           :image="(object) ['data_src' => $web_image, 'class' => 'object-fit-cover']"
                           :sub-title="__('Subject')" :title="$web_title"
                           :description="__('Introduce: :description', ['description' => $web_description])" :pills="[
                    (object) [
                        'class' => 'bg-primary',
                        'description' => __(':number lessons', ['number' => $subject->lessons()->count()]),
                    ],
                    (object) [
                        'class' => 'bg-secondary',
                        'description' => __('Publish at :time', ['time' => $subject->publish_at]),
                    ],
                ]"/>
        </div>

        @include('study.course.lazy')
    </div>
@endsection
