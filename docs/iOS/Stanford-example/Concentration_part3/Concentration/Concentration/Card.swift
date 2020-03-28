//
//  Card.swift
//  Concentration
//
//  Created by Kim Taeseon on 2018. 5. 10..
//  Copyright © 2018년 connect.foundation.sr9872. All rights reserved.
//

import Foundation

struct Card {
    var isFaceUp = false
    var isMatched = false
    var identifier: Int
//    [C2-6]
    private static var identifierFactory = 0
//    [C2-7]
    private static func getUniqueIdentifier() -> Int {
        identifierFactory += 1
        return identifierFactory
    }
    
    init() {
        self.identifier = Card.getUniqueIdentifier()
    }
    // Card에 대한 정보는 Card 구조체에서 관리하게 됩니다. 구조체는 모든 인자를 초기화 할 수 있는 공짜 init을 가지게 됩니다. 하지만 이미 초기화 해 놓은 프로퍼티도 또다시 초기화 해야 하는 번거로움이 발생하게 되므로, init 함수를 이용해서 identifier를 초기화 해줍니다.
//    여기서 인자로 들어오는 identifier와 Card 구조체가 가지고 있는 프로퍼티인 identifier를 구분하기 위해 구조체가 가지고 있는 프로퍼티 앞에는 self를 붙입니다.
}
