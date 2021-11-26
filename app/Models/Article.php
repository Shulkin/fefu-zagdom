<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    public static function boot(): void {
        parent::boot();

        static::addGlobalScope(fn(Builder $query) => $query->latest());
    }
}
