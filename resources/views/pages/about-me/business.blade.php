@vite('resources/js/pages/about-me/business.js')

<section class="mb-5 bg-dark-subtle rounded-2 py-3">
    <h3 class="text-center">@lang('Business')</h3>

    <div class="swiper">
        <div class="swiper-wrapper">
            @php
                $images = [
                    (object) [
                        'alt' => 'Ecommage',
                        'href' => asset('storage/images/others/vtcacademy.png'),
                    ],
                    (object) [
                        'alt' => 'VTC Academy',
                        'href' => asset('storage/images/others/ecommage.png'),
                    ],
                    (object) [
                        'alt' => 'CLEAR Go',
                        'href' => asset('storage/images/others/cleargo.png'),
                    ],
                ];
            @endphp
            @for ($i = 0; $i < 3; $i++)
                @foreach ($images as $image)
                    <div class="swiper-slide">
                        <img src="{{ asset('logo.png') }}" data-src="{{ $image->href }}" alt="{{ $image->alt }}"
                             class="d-block w-100 object-fit-contain" style="height: 60px">
                    </div>
                @endforeach
            @endfor
        </div>
    </div>
</section>
