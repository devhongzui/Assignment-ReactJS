@php
    /** @var \App\Models\Lesson $item */
    $src_lesson = $item->getThumbnail('medium')->url ?? asset('logo.png');
@endphp
<a href="{{ route('lesson', $item->id) }}" aria-label="{{ $item->title }}" role="link"
   class="@isset($old) opacity-50 @elseif(isset($recent)) fw-bolder @endisset ">
    <div class="row mb-2">
        <div class="col-3">
            <img src="{{ asset('logo.png') }}" data-src="{{ $src_lesson }}" alt="{{ $item->title }}"
                 class="object-fit-contain" style="width: 100%; height: 45px;">
        </div>
        <div class="col-9 overflow-hidden" data-bs-toggle="tooltip" data-bs-placement="top"
             data-bs-title="{{ $item->title }}"
             style="display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;">
            {{ $item->title }}
        </div>
    </div>
</a>
