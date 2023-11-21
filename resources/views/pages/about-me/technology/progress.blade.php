<div class="row">
    <div class="col-xxl-3">
        <img data-src="{{ $image }}" alt="{{ $title }}" class="bg-light rounded-2 mb-2"
             style="height: 50px; width: 50px;">
    </div>
    <div class="col-xxl-9">
        <strong>{{ $title }}</strong>
        <p class="overflow-hidden" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="{{ $description }}"
           style="display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;">
            {{ $description }}
        </p>
    </div>
</div>
<div class="progress mb-3" role="progressbar">
    <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: {{ $progress }}%;">
        {{ $progress }}%
    </div>
</div>
