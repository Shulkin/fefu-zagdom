<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Support\Facades\DB;

class ArticleSeeder extends BaseSeeder
{
    private array $mockImageUrls = [
        'images/mockup/news/news-1.png',
        'images/mockup/news/news-2.png',
        'images/mockup/news/news-3.png',
        'images/mockup/news/news-4.png',
    ];

    private array $mockTitles = [
        'Как сделать строительство дешевле?',
        'Почему Гуд Вилл строит лучшие дома?',
        'Преимущества и недостатки частного дома',
        'Из чего мы строим дома в ипотеку?',
    ];

    private array $mockDescriptions = [
        'Строительство дома можно сделать <b>дешевле — выбрав</b> проект...',
        'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...',
        'Первое и главное: строим дом индивидуально для вас, по вашим...',
        'Самый популярный вопрос наших клиентов касается материалов, которы...',
    ];

    public function run(): void
    {
        DB::table('articles')->truncate();

        for ($i = 120; $i --> 0;) {
            $article = new Article();
            $article->title = $this->faker->randomElement($this->mockTitles);
            $article->description = $this->faker->randomElement($this->mockDescriptions);
            $article->image = $this->faker->randomElement($this->mockImageUrls);
            $article->created_at = $article->updated_at = $this->faker->dateTimeBetween('-5 month');
            $article->save();
        }
    }
}
