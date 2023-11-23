<div class="card border-0 d-lg-none">
    <div class="card-body">
        <div class="card-title h5">{{ $title }}</div>
        <div class="card-subtitle h6 mb-2 text-body-secondary">{{ $subTitle }}</div>
        <p class="card-text overflow-hidden" data-bs-toggle="tooltip" data-bs-placement="bottom"
           data-bs-title="{{ $description }}"
           style="display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 4;">
            {{ $description }}
        </p>
    </div>
</div>

<div class="row d-none d-lg-flex align-items-end">
    <div class="col-3 mt-2">
        <a href="{{ $link }}" target="_blank" role="link" aria-label="{{ $title }}">
            <img data-src="{{ $image->data_src }}" class="card-img rounded-4 {{ $image->class }}"
                 alt="{{ $title }}" style="min-height: 200px; max-height: 200px;">
        </a>
    </div>
    <div class="col-9 mt-2">
        <div class="h5">{{ $subTitle }}</div>
        <div class="h2">
            <a href="{{ $link }}" target="_blank" role="link" aria-label="{{ $title }}"
               class="text-decoration-none">
                {{ $title }}
            </a>
        </div>
        <pre class="overflow-hidden" data-bs-toggle="tooltip" data-bs-placement="left"
             data-bs-title="{{ $description }}"
             style="display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;">{{ $description }}</pre>
        <div class="mb-2">
            @foreach ($pills as $pill)
                <span class="badge rounded-pill {{ $pill->class }} shadow-lg">{{ $pill->description }}</span>
            @endforeach
        </div>
    </div>
</div>
