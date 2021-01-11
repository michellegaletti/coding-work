package com.example.halloween;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void sayBoo(View view) {
        //editText
        EditText name = findViewById(R.id.editText);
        String nameValue = name.getText().toString();

        //imageView
        ImageView ghost = findViewById(R.id.imageView);
        ghost.setImageResource(R.drawable.ghost);

        //textView
        TextView booText = findViewById(R.id.message);
        booText.setText("Happy Halloween " + nameValue + "!");
    }

}
