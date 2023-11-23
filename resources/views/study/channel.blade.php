@extends('layouts.web-app')

@section('main')
    <div class="container">
        <div class="mb-3">
            @php
                /** @var \App\Models\Subject $channel */
            @endphp
            <x-page.detail link="https://www.youtube.com/{{ $channel->custom_url }}"
                           :image="(object) ['data_src' => $web_image, 'class' => 'object-fit-contain']"
                           :sub-title="$channel->custom_url"
                           :title="$web_title"
                           :description="__('Introduce: :description', ['description' => $web_description])" :pills="[
                    (object) [
                        'class' => 'bg-primary',
                        'description' => __(':number lessons', ['number' => $channel->lessons()->count()]),
                    ],
                    (object) [
                        'class' => 'bg-secondary',
                        'description' => __(':number subjects', ['number' => $channel->subjects()->count()]),
                    ],
                ]" />
        </div>

        @foreach ($list as $item)
            <hr>
            <h3 class="text-center mt-3">{{ $item->title }}</h3>

            @include('study.course.lazy', [
                'data' => $item->data,
                'route' => $item->route,
            ])
        @endforeach
    </div>
@endsection
