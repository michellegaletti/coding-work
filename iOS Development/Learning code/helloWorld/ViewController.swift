//
//  ViewController.swift
//  helloWorld
//
//  Created by Michelle Galetti on 8/29/19.
//  Copyright © 2019 Michelle Galetti. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    //MARK: Properties
    @IBOutlet weak var messageText: UILabel!
    
    //MARK: Methods
    @IBAction func buttonPressed(_ sender: UIButton) {
        messageText.text="Hello world!"
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


}

