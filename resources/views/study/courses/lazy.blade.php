<div class="row">
    @php
        /** @var \App\Models\Course $course */
    @endphp
    @foreach ($courses as $course)
        <div class="col-sm-6 col-xl-3 mb-3">
            <div class="card">
                <img data-src="{{ asset($course->image) }}"
                     class="card-img-top img-fluid bg-light object-fit-contain p-2"
                     alt="{{ $course->title }}" style="height: 100px">
                <div class="card-body">
                    <h5 class="card-title">{{ $course->title }}</h5>
                    <p class="card-text overflow-hidden" data-bs-toggle="tooltip" data-bs-placement="bottom"
                       data-bs-title="{{ $course->description }}"
                       style="min-height: 70px;
                               display: -webkit-box;
                               -webkit-box-orient: vertical;
                               -webkit-line-clamp: 3;">
                        {{ $course->description }}
                    </p>
                    <a href="#" class="btn btn-primary">{{ __('Quick view') }}</a>
                </div>
            </div>
        </div>
    @endforeach

    <div class="d-flex justify-content-center d-md-block mt-2">
        {{ $courses->links('pagination::bootstrap-5') }}
    </div>

    @include('paginate.lazy')
</div>
