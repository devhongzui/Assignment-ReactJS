<section class="mb-5 px-2">
    <h3 class="text-center">@lang('Project')</h3>
    <div class="row">
        @php
            $cards = [
                (object) [
                    'project_name' => 'Genki Sushi',
                    'type' => __('Enterprise'),
                    'tech' => 'Magento 2',
                    'short_introduce' => __('Genki Sushi Hong Kong bestsellers comprise sushi, sashimi, light foods, hot dishes, desserts and kids'),
                    'image' => (object) [
                        'data_src' => asset('storage/images/others/genki.png'),
                        'class' => 'object-fit-cover',
                    ],
                    'url' => 'https://order.genkisushi.com.hk/en',
                ],
                (object) [
                    'project_name' => 'Galle',
                    'type' => __('Enterprise'),
                    'tech' => 'Magento 2',
                    'short_introduce' => __('Galle Genuine Watch System is gradually increasing its position as the number 1 watch distributor in Vietnam'),
                    'image' => (object) [
                        'data_src' => asset('storage/images/others/gallewatch.png'),
                        'class' => 'object-fit-cover',
                    ],
                    'url' => 'https://galle.vn',
                ],
                (object) [
                    'project_name' => 'hy!',
                    'type' => __('Enterprise'),
                    'tech' => 'Magento 2',
                    'short_introduce' => __('Shop thousands products (beauty, clothing, lifestyle) and order takeaway foods from Lee Gardens'),
                    'image' => (object) [
                        'data_src' => asset('storage/images/others/hy.jpg'),
                        'class' => 'object-fit-cover',
                    ],
                    'url' => 'https://hyleegardens.com.hk/en',
                ],
                (object) [
                    'project_name' => 'Routine',
                    'type' => __('Enterprise'),
                    'tech' => 'Magento 2',
                    'short_introduce' => __('ROUTINE is a famous, high-end fashion clothing brand in Vietnam, specializing in genuine everyday wear'),
                    'image' => (object) [
                        'data_src' => asset('storage/images/others/routine.jpg'),
                        'class' => 'object-fit-cover',
                    ],
                    'url' => 'https://routine.vn',
                ],
                (object) [
                    'project_name' => 'devhongzui',
                    'type' => __('Individual'),
                    'tech' => 'Laravel',
                    'short_introduce' => __('Practice CRUD, Authentication, OAuth operations on Laravel with MySQL Database'),
                    'image' => (object) [
                        'data_src' => asset('storage/images/pngwing/laravel.png'),
                        'class' => 'object-fit-contain bg-light p-2',
                    ],
                    'url' => config('app.url'),
                ],
                (object) [
                    'project_name' => 'devhongzui API',
                    'type' => __('Individual'),
                    'tech' => 'NodeJs',
                    'short_introduce' => __('Get familiar with Back-end development using NodeJs, MongoDB, GraphQL. Deploy the project on the Product environment (Ubuntu)'),
                    'image' => (object) [
                        'data_src' => asset('storage/images/brandfetch/nodejs.png'),
                        'class' => 'object-fit-contain bg-light p-2',
                    ],
                    'url' => config('app.api_url'),
                ],
            ];
        @endphp
        @foreach ($cards as $card)
            <div class="col-xl-4 mt-3 mb-5">
                <div class="card mx-auto">
                    <a href="{{ $card->url }}" target="_blank" role="link" aria-label="{{ $card->project_name }}">
                        <img data-src="{{ $card->image->data_src }}" class="card-img-top {{ $card->image->class }}"
                             alt="{{ $card->project_name }}" style="height: 300px">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title text-center fw-bold">{{ $card->project_name }}</h5>
                        <div class="card-text text-center">
                            <strong>@lang('Type')</strong>
                            <span>{{ $card->type }}</span>
                            <br>
                            <strong>@lang('Technology')</strong>
                            <span>{{ $card->tech }}</span>
                            <br>
                            <div class="overflow-hidden mb-2"
                                 style="min-height: 50px;
                                        display: -webkit-box;
                                        -webkit-box-orient: vertical;
                                        -webkit-line-clamp: 2;">
                                <strong>@lang('Introduce')</strong>
                                <span data-bs-toggle="tooltip" data-bs-placement="top"
                                      data-bs-title="{{ $card->short_introduce }}">
                                    {{ $card->short_introduce }}
                                </span>
                            </div>
                        </div>
                        <a href="{{ $card->url }}" target="_blank" role="link"
                           aria-label="{{ $card->project_name }}" class="btn btn-primary w-100">
                            @lang('Quick view')
                        </a>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</section>
