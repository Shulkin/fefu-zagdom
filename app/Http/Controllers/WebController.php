<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Contracts\View\View;

class WebController extends Controller
{
    private const HOME_NEWS_LIMIT = 4;
    private const NEWS_LIST_LIMIT = 12;

    public function home(): View {
        $news = Article::query()->limit(self::HOME_NEWS_LIMIT)->get();

        return view('home', compact('news'));
    }

    public function news(): View {
        $news = Article::query()->paginate(self::NEWS_LIST_LIMIT);

        return view('news', compact('news'));
    }
}
