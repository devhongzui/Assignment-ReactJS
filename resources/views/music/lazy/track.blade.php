<div class="row mb-3 ps-4 pe-1">
    <div class="row my-3">
        <strong class="col-xl-1 d-none d-xl-grid">#</strong>
        <strong class="col-md-11 @if ($playlist_page ?? false) col-lg-9 @endif col-xl-8">@lang('Title')</strong>
        @if ($playlist_page ?? false)
            <strong class="col-lg-2 d-none d-lg-grid">@lang('Album')</strong>
        @endif
        <strong class="col-md-1 d-none d-md-grid"><i class="fa-regular fa-clock"></i></strong>
    </div>
    <hr>
    @foreach ($items as $index => $item)
        @php
            $track = $playlist_page ?? false ? $item['track'] : $item;

            $link = $track['external_urls']['spotify'];
            $image = $playlist_page ?? false ? $track['album']['images'][2]['url'] : null;
            $title = $track['name'];
            $time = \Carbon\Carbon::createFromTimestampMs($track['duration_ms'])->format('i:s');
        @endphp
        <div class="row align-items-center mb-2">
            <div class="col-xl-1 d-none d-xl-grid">{{ $index + 1 }}</div>
            <div class="col-md-11 @if ($playlist_page ?? false) col-lg-9 @endif col-xl-8">
                @if ($image)
                    <div class="row">
                        <div class="col-4 col-md-2">
                            <a href="{{ $link }}" role="link" target="_blank"
                               aria-label="{{ $title }}">
                                <img data-src="{{ $image }}" class="rounded-5" alt="{{ $title }}"
                                     style="width: 50px; height: 50px;">
                            </a>
                        </div>
                        <div class="col-8 col-md-10">
                            @endif
                            <div class="h5">
                                <a href="{{ $link }}" role="link" target="_blank" aria-label="{{ $title }}"
                                   class="text-decoration-none">
                                    {{ $title }}
                                </a>
                            </div>
                            @foreach ($track['artists'] as $index => $artist)
                                <a href="#" class="text-decoration-none" role="link"
                                   aria-labelledby="{{ $artist['name'] }}" style="color: unset">
                                    {{ $artist['name'] }}
                                </a>
                                @if (count($track['artists']) > 1 && $index + 1 < count($track['artists']))
                                    -
                                @endif
                            @endforeach
                            @if ($image)
                        </div>
                    </div>
                @endif
            </div>
            @if ($playlist_page ?? false)
                @php
                    $link = route('album', $track['album']['id']);
                    $title = $track['album']['name'];
                @endphp
                <div class="col-lg-2 d-none d-lg-grid">
                    <a href="{{ $link }}" role="link" aria-label="{{ $title }}" class="text-decoration-none">
                        {{ $title }}
                    </a>
                </div>
            @endif
            <div class="col-md-1 d-none d-md-grid">{{ $time }}</div>
        </div>
        <hr>
    @endforeach
</div>
