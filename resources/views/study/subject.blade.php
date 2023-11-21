@extends('layouts.web-app')

@section('main')
    <div class="container">
        <div class="mb-3">
            @php
                /** @var \App\Models\Subject $subject */
                $src_subject = $subject->getThumbnail('high')->url ?? asset('logo.png');
            @endphp
            <x-page.detail :link="route('course', $subject->id)"
                           :image="(object) ['data_src' => $src_subject, 'class' => 'object-fit-cover']" sub-title=""
                           :title="$web_title" :description="$web_description ?: __('N/A')"
                           :pills="[
                    (object) [
                        'class' => 'bg-primary',
                        'description' => __(':number lessons', ['number' => $subject->lessons()->count()]),
                    ],
                ]" />
        </div>

        @include('study.course.lazy')
    </div>
@endsection
