<div class="card mx-auto">
    <img data-src="{{ $image }}" class="card-img-top" alt="{{ $title }}">
    <div class="card-body">
        <h5 class="card-title fw-bold">{{ $title }}</h5>
        <p class="card-text overflow-hidden" data-bs-toggle="tooltip" data-bs-placement="top"
           data-bs-title="{{ $description }}"
           style="min-height: 50px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;">
            {{ $description }}
        </p>
    </div>
</div>
