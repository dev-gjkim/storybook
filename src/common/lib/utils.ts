export const debounce = (callback: any, delayTime = 500) => {
    let timeout: any = null;
    return (...args: any[]) => {
        // delayTime 이전에 이벤트 재발생시 기존 timer clear
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            // 지정된 함수 실행
            callback(...args);
            // 함수 실행 후 settimeout clear
            clearTimeout(timeout);
        }, delayTime);
    };
};

