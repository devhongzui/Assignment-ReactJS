<div class="row">
    @foreach ($data as $item)
        <div class="col-sm-6 col-xl-3 mt-2 mb-4">
            <div class="card border-0 bg-dark-subtle">
                @php
                    $src_subject = $item->getThumbnail('high')->url ?? asset('logo.png');
                @endphp
                <a href="{{ route($route, $item->id) }}" aria-label="{{ $item->title }}">
                    <img data-src="{{ $src_subject }}"
                         class="card-img-top img-fluid bg-light object-fit-contain p-2 rounded-2"
                         alt="{{ $item->title }}"
                         style="height: 100px">
                </a>
                <div class="card-body">
                    <a href="{{ route($route, $item->id) }}" aria-label="{{ $item->title }}">
                        <h5 class="card-title overflow-hidden"
                            style="display: -webkit-box;
                                           -webkit-box-orient: vertical;
                                           -webkit-line-clamp: 1;">
                            {{ $item->title }}
                        </h5>
                    </a>
                    <p class="card-text overflow-hidden" data-bs-toggle="tooltip" data-bs-placement="bottom"
                       data-bs-title="{{ __('Introduce: :description', ['description' => $item->description]) }}"
                       style="min-height: 70px;
                                      display: -webkit-box;
                                      -webkit-box-orient: vertical;
                                      -webkit-line-clamp: 3;">
                        {{ __('Introduce: :description', ['description' => $item->description]) }}
                    </p>
                </div>
            </div>
        </div>
    @endforeach

    <div class="d-flex justify-content-center d-md-block mt-2">
        {{ $data->links('pagination::bootstrap-5') }}
    </div>

    @include('paginate.lazy')
</div>
