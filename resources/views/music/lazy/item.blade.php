<div class="col-xl-4">
    <div class="card mt-3 mb-5 bg-dark-subtle shadow-lg">
        <div class="row">
            <div class="col-4">
                <a href="{{ $link }}" role="link" aria-label="{{ $title }}">
                    <img data-src="{{ $image }}" class="img-fluid object-fit-cover rounded-start"
                         alt="{{ $title }}" style="height: 100px; width: 100%">
                </a>
            </div>
            <div class="col-8">
                <div class="card-body">
                    <div class="h5 overflow-hidden card-title"
                         style="display: -webkit-box;
                                -webkit-line-clamp: 1;
                                -webkit-box-orient: vertical;">
                        <a href="{{ $link }}" role="link" aria-label="{{ $title }}"
                           class="text-decoration-none">
                            {{ $title }}
                        </a>
                    </div>
                    <p class="card-text">
                        <span class="row overflow-hidden">
                            <span class="col-6"
                                  style="display: -webkit-box;
                                         -webkit-line-clamp: 1;
                                         -webkit-box-orient: vertical;">
                                <strong>{{ $description }}</strong>
                            </span>
                            <small class="col-6 text-body-secondary text-end"
                                   style="display: -webkit-box;
                                          -webkit-line-clamp: 1;
                                          -webkit-box-orient: vertical;">
                                {{ $small_text }}
                            </small>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
