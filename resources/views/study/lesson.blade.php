@extends('layouts.web-app')

@section('main')
    <div class="container">
        <div class="row">
            <div class="col-xl-8 order-0 mb-3">
                @include('study.lesson.video')
            </div>
            <div class="col-xl-4 order-2 order-xl-1 mb-3">
                @include('study.lesson.list')
            </div>
            <div class="col-12 order-1 order-xl-2 mb-3">
                @include('study.lesson.comment')
            </div>
        </div>
    </div>
@endsection
