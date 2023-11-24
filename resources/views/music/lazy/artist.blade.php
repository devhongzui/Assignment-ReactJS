<div class="row mb-3 mx-0">
    @foreach ($artists as $artist)
        @include('music.lazy.item', [
            'link' => route('artist', $artist['id']),
            'image' => $artist['images'][0]['url'] ?? asset('logo.png'),
            'title' => $artist['name'],
            'description' => __('Top :number', ['number' => number_format($artist['popularity'])]),
            'small_text' => __(':number followers', [
                'number' => number_format($artist['followers']['total']),
            ]),
        ])
    @endforeach
</div>
