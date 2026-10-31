# 材料清单

<table id="list">
    <thead>
        <tr>
            <th>材料名</th>
            <th>单价</th>
            <th>数量</th>
            <th>总价</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>材料1</th>
            <th><input id="price" value="50"></th>
            <th><input id="count" value="2" step="1"></th>
            <th id="total">0</th>
        </tr>
        <tr>
            <th>材料2</th>
            <th><input id="price" value="30"></th>
            <th><input id="count" value="3" step="1"></th>
            <th id="total">0</th>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3" align="right"><strong>合计</strong></td>
            <td id="grand-total"><strong>0</strong></td>
        </tr>
    </tfoot>
</table>

<script>
    function calculate() {
        let grandTotal = 0
        const rows = document.querySelectorAll('#list tbody tr')
        rows.forEach(row => {
            const price = parseFloat(row.querySelector('#price').value) || 0
            const count = parseInt(row.querySelector('#count').value) || 0
            const total = (price * count).toFixed(2)
            row.querySelector('#total').textContent = total
            grandTotal += parseFloat(total)
        })
        document.getElementById('grand-total').textContent = grandTotal.toFixed(2)
    }

    window.onload = calculate
    
    document.querySelectorAll('#price, #count').forEach(input => {
        input.addEventListener('input', calculate)
    })
</script>