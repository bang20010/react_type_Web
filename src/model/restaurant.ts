
export interface RestaurantData{
    page: number,
    perPage: number,
    totalCount: number,
    currentCount: number,
    matchCount: number,
    data : Restaurant[]
}

export interface Restaurant{
    모범업소명 : string,
    주소	:string,
    연락처	: string,
    지정일자 :	string,
    최신지정일자 :	string,
    업태 : string,
    대표메뉴 : string,
    기준일 : string,
}