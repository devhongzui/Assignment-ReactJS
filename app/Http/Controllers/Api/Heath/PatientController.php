<?php

namespace App\Http\Controllers\Api\Heath;

use App\Http\Controllers\Controller;
use App\Models\Heath\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = $request->get('limit', 8);

        $patient = Patient::with(['measurements', 'activities']);

        if ($request->exists('query')) {
            $search = "%{$request->get('query')}%";

            $patient->orWhere('last_name', 'like', $search)
                ->orWhere('first_name', 'like', $search)
                ->orWhere('contacts.phone', 'like', $search)
                ->orWhere('contacts.mail', 'like', $search)
                ->orWhere('contacts.other', 'like', $search);
        }

        if ($request->exists('filters'))
            foreach ($request->filters as $field_name => $value)
                switch ($field_name) {
                    case 'status':
                        $patient->where($field_name, (int)$value);
                        break;
                    case 'phone':
                    case 'mail':
                    case 'other':
                        $patient->where("contacts.$field_name", $value);
                        break;
                    default:
                        $patient->where($field_name, $value);
                        break;
                }

        if ($request->exists(['sorting.sorting_field', 'sorting.sorting_direction']))
            $patient->orderBy($request->sorting['sorting_field'], $request->sorting['sorting_direction']);

        return $patient->paginate($limit);
    }

    /**
     * Display the specified resource.
     *
     * @param string $id
     * @return Patient
     */
    public function show(string $id): Patient
    {
        return Patient::find($id);
    }
}
