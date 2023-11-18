<?php

namespace App\Http\Controllers\Admin;

use Backpack\CRUD\app\Library\CrudPanel\CrudPanel;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use Illuminate\Support\Str;

/**
 * Class ActivityLogCrudController
 * @package Backpack\ActivityLog\Http\Controllers
 * @property-read CrudPanel $crud
 */
class ActivityLogCrudController extends \Backpack\ActivityLog\Http\Controllers\ActivityLogCrudController
{
    /**
     * Define what happens when the List operation is loaded.
     *
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation(): void
    {
        CRUD::addColumn([
            'name' => 'causer_type',
            'label' => ucfirst(__('backpack.activity-log::activity_log.causer_model')),
            'type' => 'text',
            'value' => fn($entry) => $entry->causer ? Str::of(get_class($entry->causer))->afterLast('\\') : '',
            'wrapper' => [
                'title' => fn($crud, $column, $entry) => $entry->causer ? get_class($entry->causer) : '',
            ],
        ]);

        CRUD::addColumn([
            'name' => 'causer',
            'label' => ucfirst(__('backpack.activity-log::activity_log.causer')),
            'type' => 'text',
            'value' => fn($entry) => $entry->causer && method_exists($entry->causer, 'identifiableAttribute') ? $entry->causer->{$entry->causer->identifiableAttribute()} : '',
            'wrapper' => [
                'href' => fn($crud, $column, $entry) => $this->getEntryUrl($entry->causer) ?? '',
                'element' => fn($crud, $column, $entry) => $this->getEntryUrl($entry->causer) ? 'a' : 'span',
                'title' => function ($crud, $column, $entry) {
                    return $entry->causer ? "ID {$entry->causer->getKey()}" : '';
                },
            ],
        ]);

        CRUD::addColumn([
            'name' => 'event',
            'label' => ucfirst(__('backpack.activity-log::activity_log.event')),
            'type' => 'text',
            'value' => function ($entry) {
                if (in_array($entry->event, self::KNOWN_EVENTS)) {
                    $entry->event = "backpack.activity-log::activity_log.{$entry->event}";
                }
                return ucfirst(__($entry->event));
            },
        ]);

        CRUD::addColumn([
            'name' => 'subject_type',
            'label' => ucfirst(__('backpack.activity-log::activity_log.subject_model')),
            'type' => 'text',
            'value' => fn($entry) => $entry->subject ? Str::of(get_class($entry->subject))->afterLast('\\') : '',
            'wrapper' => [
                'title' => fn($crud, $column, $entry) => $entry->subject ? get_class($entry->subject) : '',
            ],
        ]);

        CRUD::addColumn([
            'name' => 'subject',
            'label' => ucfirst(__('backpack.activity-log::activity_log.subject')),
            'type' => 'text',
            'value' => fn($entry) => $entry->subject && method_exists($entry->subject, 'identifiableAttribute') ? $entry->subject->{$entry->subject->identifiableAttribute()} : '',
            'wrapper' => [
                'href' => fn($crud, $column, $entry) => $this->getEntryUrl($entry->subject) ?? '',
                'element' => fn($crud, $column, $entry) => $this->getEntryUrl($entry->subject) ? 'a' : 'span',
                'title' => function ($crud, $column, $entry) {
                    return $entry->causer ? "ID {$entry->causer->getKey()}" : '';
                },
            ],
        ]);

        CRUD::addColumn([
            'name' => 'created_at',
            'label' => ucfirst(__('backpack.activity-log::activity_log.date')),
            'type' => 'datetime',
        ]);

        // Filters
        if (backpack_pro())
            $this->setupFilters();
    }
}
