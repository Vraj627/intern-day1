const SUPABASE_URL = 'https://xnhvivqlfctauknlwvml.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuaHZpdnFsZmN0YXVrbmx3dm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NjQxMTksImV4cCI6MjA2NDQ0MDExOX0.bzqjjy85wGXwp105-JNhVdzbU4qhumWuo_IkXUD3p1U';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const form = document.getElementById('contact-form');
const status = document.getElementById('status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const full_name = document.getElementById('full_name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const { data, error } = await supabase
        .from('contacts')
        .insert([{ full_name, email, phone }]);

    if (error) {
        status.textContent = "❌ Failed to save contact.";
        console.error(error);
    } else {
        status.textContent = "✅ Contact saved successfully!";
        form.reset();
    }
});