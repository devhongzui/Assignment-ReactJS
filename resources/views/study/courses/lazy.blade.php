<div class="row">
    @forelse ($data as $item)
        <div class="col-sm-6 col-xl-3 mt-2 mb-4">
            <div class="card border-0 bg-dark-subtle shadow-lg">
                @php
                    $href = route($route, $item->id);
                @endphp
                <a href="{{ $href }}" aria-label="{{ $item->title }}">
                    <img data-src="{{ asset($item->image) }}" alt="{{ $item->title }}"
                         class="card-img-top img-fluid bg-light object-fit-contain p-2" style="height: 100px">
                </a>
                <div class="card-body">
                    <a href="{{ $href }}" aria-label="{{ $item->title }}">
                        <h5 class="card-title overflow-hidden"
                            style="display: -webkit-box;
                                   -webkit-box-orient: vertical;
                                   -webkit-line-clamp: 1;">
                            {{ $item->title }}
                        </h5>
                    </a>
                    <p class="card-text overflow-hidden" data-bs-toggle="tooltip" data-bs-placement="bottom"
                       data-bs-title="@lang('Introduce: :description', ['description' => $item->description])"
                       style="min-height: 70px;
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              -webkit-line-clamp: 3;">
                        {{ $item->description }}
                    </p>
                </div>
            </div>
        </div>
    @empty
        <x-empty />
    @endforelse

    <div class="d-flex justify-content-center d-md-block mt-2">
        {{ $data->links('pagination::bootstrap-5') }}
    </div>

    @include('paginate.lazy')
</div>
