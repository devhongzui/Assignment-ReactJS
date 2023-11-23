<div class="swiper rounded-2 mb-4">
    <div class="swiper-wrapper">
        @foreach ($items as $item)
            <div class="swiper-slide">
                <a href="{{ route('playlist', $item['id']) }}" role="link" aria-label="{{ $item['name'] }}">
                    <img data-src="{{ $item['images'][0]['url'] }}" alt="{{ $item['name'] }}"
                         class="w-100 object-fit-contain" style="height: 200px">
                </a>
            </div>
        @endforeach
    </div>
</div>
