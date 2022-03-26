import React from 'react';

const QnA = () => {
    return (
        <section>
            <div>
                <h2>How to react works</h2>
                <p>1.	React JSX মাধ্যমে  আমাদের HTMLকোড  জেনারেট করে Create করে। <br />
                    2.	React dom আমাদের broswe এ render করে যেন আমরা দেখতে পাই।<br />
                    3.	React  আমাদের Website অনেক গুলো Component এ ভাগ করে নেয়।<br />
                    4.	React  dom আমাদের code execute করার সময় virtual dom এ  পরিনত করে  renderকরে।

                </p>
            </div>
            <div>
                <h2>Difference between State and props</h2>
                1.State Function বাইরে অ্যাক্সেস এবং পরিবর্তন করা যায় না। এটি একটি ফাংশনের মান হিসেবে থাকে।<br />
                2.props উপাদানগুলিকে প্রপ আকারে তাদের মূল উপাদান থেকে ডেটা গ্রহণ করার ক্ষমতা দিয়ে উপাদানগুলিকে পুনরায় ব্যবহারযোগ্য করে তোলে।<br />
                3. স্টেট হল একটি ডেটা স্ট্রাকচার যা একটি কম্পোনেন্ট এ পাঠানোর   সময় একটি ডিফল্ট মান দিয়ে পাঠাতে হয়।<br />
                4. props এর মাধ্যমে data অন্য component এ share  করা যায়।

            </div>
        </section>


    );
};

export default QnA;