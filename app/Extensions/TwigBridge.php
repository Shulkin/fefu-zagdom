<?php

namespace App\Extensions;

use Carbon\Carbon;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class TwigBridge extends AbstractExtension
{
    private $monthMap = [
        'January' => 'января',
        'February' => 'февраля',
        'March' => 'марта',
        'April' => 'апреля',
        'May' => 'мая',
        'June' => 'июня',
        'July' => 'июля',
        'August' => 'августа',
        'September' => 'сентября',
        'October' => 'октября',
        'November' => 'ноября',
        'December' => 'декабря',
    ];

    public function formatDate(Carbon $date): string {
        $formattedEnDate = $date->formatLocalized('%d %B %Y');
        return str_replace(array_keys($this->monthMap), array_values($this->monthMap), $formattedEnDate);
    }

    public function resolveMixPath(string $resource): string {
        return $resource;
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('formatDate', [$this, 'formatDate']),
            new TwigFilter('mix', [$this, 'resolveMixPath']),
        ];
    }
}
