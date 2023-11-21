<div class="row">
    @php
        /** @var \App\Models\Subject $subject */
    @endphp
    @foreach ($subjects as $subject)
        <div class="col-sm-6 col-xl-3 mb-3">
            <div class="card border-0">
                <a href="#" aria-label="{{ $subject->title }}">
                    @php
                        $src_subject = $subject->getThumbnail('maxres')->url ?? asset('logo.png');
                        $channel = $subject->channel;
                        $src_channel = $channel->getThumbnail('medium')->url ?? asset('logo.png');
                    @endphp
                    <img data-src="{{ $src_subject }}"
                         class="card-img-top img-fluid bg-light object-fit-cover rounded-2"
                         alt="{{ $subject->title }}" style="height: 100px">
                </a>
                <div class="card-body">
                    <div class="row">
                        <div class="col-3">
                            <img data-src="{{ $src_channel }}" class="rounded-5" alt="{{ $channel->title }}"
                                 style="width: 45px; height: 45px;">
                        </div>
                        <div class="col-9">
                            <a href="#" aria-label="{{ $subject->title }}">
                                <h5 class="card-title overflow-hidden"
                                    style="display: -webkit-box;
                                           -webkit-box-orient: vertical;
                                           -webkit-line-clamp: 1;">
                                    {{ $subject->title }}
                                </h5>
                            </a>
                            <p class="card-text overflow-hidden" data-bs-toggle="tooltip" data-bs-placement="bottom"
                               data-bs-title="{{ $subject->description ? $subject->description : __('N/A') }}"
                               style="min-height: 70px;
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              -webkit-line-clamp: 3;">
                                {{ $subject->description }}
                            </p>
                            <p class="fw-bolder">{{ $channel->title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endforeach

    <div class="d-flex justify-content-center d-md-block mt-2">
        {{ $subjects->links('pagination::bootstrap-5') }}
    </div>

    @include('paginate.lazy')
</div>
