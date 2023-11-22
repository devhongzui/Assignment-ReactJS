<div class="card">
    <div class="card-body p-0 rounded-top-2 ratio ratio-4x3">
        <iframe class="rounded-top-2" width="100%" height="100%" src="https://www.youtube.com/embed/{{ $lesson->url }}"
                title="{{ $lesson->title }}" allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
    </div>
    <h2 class="card-header">{{ $lesson->title }}</h2>
    <div class="card-body overflow-auto" style="max-height: 262px;">
        <div class="row mb-2">
            <strong class="col-3 col-xl-2">@lang('Introduce')</strong>
            <div class="col-9 col-xl-10">
                <pre class="mb-0">{{ $lesson->description }}</pre>
            </div>
        </div>
        <div class="row mb-2">
            <strong class="col-3 col-xl-2">@lang('Subject')</strong>
            <div class="col-9 col-xl-10">
                <a href="{{ route('subject', $subject->id) }}" target="_blank" role="link"
                   class="text-decoration-underline" aria-label="{{ $subject->title }}">
                    {{ $subject->title }}
                </a>
            </div>
        </div>
        <div class="row">
            <strong class="col-3 col-xl-2">@lang('Publish at')</strong>
            <div class="col-9 col-xl-10">{{ $lesson->publish_at }}</div>
        </div>
    </div>
    <h4 class="card-header">
        @php
            $src_channel = $channel->getThumbnail('medium')->url ?? asset('logo.png');
        @endphp
        <a href="{{ route('channel', $channel->id) }}" aria-label="{{ $channel->title }}" role="link"
           data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="@lang('Channel')">
            <img src="{{ asset('logo.png') }}" data-src="{{ $src_channel }}" alt="{{ $channel->title }}"
                 class="rounded-5" style="width: 35px; height: 35px;">
            {{ $channel->title }}
        </a>
    </h4>
</div>
