<div class="row mb-3 mx-0">
    @foreach ($playlists['items'] as $playlist)
        @include('music.lazy.item', [
            'link' => '#',
            'image' => $playlist['images'][0]['url'],
            'title' => $playlist['name'],
            'description' => $playlist['description'],
            'small_text' => $playlist['owner']['display_name'],
        ])
    @endforeach

    @include('music.lazy.paginate', [
        'paginator' => $playlists,
    ])
</div>
