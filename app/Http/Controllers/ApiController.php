<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function handleCreate(Request $request) {
        return response()->json([
            'createdAt' => Carbon::now()->toRfc3339String(),
            'payload' => $request->toArray(),
            'status' => 'OK',
        ]);
    }
}
